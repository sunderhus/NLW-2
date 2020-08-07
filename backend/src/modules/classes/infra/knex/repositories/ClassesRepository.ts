import IClassesRepository from "@modules/classes/repositories/IClassesRepository";
import ICreateClassesDTO from "@modules/classes/dto/ICreateClassesDTO";

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
  }
}

export default ClassesRepository;
