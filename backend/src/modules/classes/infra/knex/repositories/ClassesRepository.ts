import ICreateClassesDTO from "@modules/classes/dtos/ICreateClassesDTO";
import IFilterClassesDTO from "@modules/classes/dtos/IFilterClassesDTO";
import IUsersClassessDTO from "@modules/classes/dtos/IUsersClassessDTO";
import IClassesRepository from "@modules/classes/repositories/IClassesRepository";
import AppError from "@shared/errors/AppError";
import db from "@shared/infra/database/knex/connections";
import convertHourToMinutes from "@shared/utils/convertHourToMinutes";
import IClass from "../entities/Class";

class ClassesRepository implements IClassesRepository {
  public async create({
    name,
    bio,
    avatar,
    whatsapp,
    cost,
    subject,
    schedule,
  }: ICreateClassesDTO): Promise<IClass> {
    const transaction = await db.transaction();
    try {
      const createdUserIds = await transaction("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id = createdUserIds[0];

      const createdClassesIds = await transaction("classes").insert({
        subject,
        avatar,
        cost,
        user_id,
      });

      const class_id = createdClassesIds[0];

      const parsedSchedules = schedule.map((schedule) => {
        return {
          week_day: schedule.week_day,
          from: convertHourToMinutes(schedule.from),
          to: convertHourToMinutes(schedule.to),
          class_id: class_id,
        };
      });

      await transaction("class_schedule").insert(parsedSchedules);

      await transaction.commit();

      return {
        avatar,
        cost,
        id: class_id,
        subject,
        user_id: user_id.toString(10),
      };
    } catch {
      transaction.rollback();

      throw new AppError("Erro on create a new class.");
    }
  }

  public async findAllClassesByFilter({
    subject,
    time,
    week_day,
  }: IFilterClassesDTO): Promise<IUsersClassessDTO[]> {
    const classes = (await db("classes")
      .whereExists(function () {
        this.select("class_schedule.*")
          .from("class_schedule")
          .whereRaw("`class_schedule`.`class_id`= `classes`.`id`")
          .whereRaw("`class_schedule`.`week_day` = ??", [Number(week_day)])
          .whereRaw("`class_schedule`.`from` <= ??", [Number(time)])
          .whereRaw("`class_schedule`.`to` > ??", [Number(time)]);
      })
      .where("classes.subject", "=", subject)
      .join("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"])) as IUsersClassessDTO[];

    return classes;
  }
}

export default ClassesRepository;
