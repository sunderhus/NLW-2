import IClassesRepository from "@modules/classes/repositories/IClassesRepository";
import ICreateClassesDTO from "@modules/classes/dto/ICreateClassesDTO";

import db from "@shared/infra/database/knex/connections";
import convertHourToMinutes from "@shared/utils/convertHourToMinutes";
import IClass from "../entities/Class";
import AppError from "@shared/errors/AppError";
import IFilterClassesDTO from "@modules/classes/dto/IFilterClassesDTO";
import { response } from "express";

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
  }: IFilterClassesDTO): Promise<IClass[]> {
    const transaction = await db.transaction();

    const classes = await transaction("classes")
      .where("classes.subject", "=", subject)
      .join("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"]);

    await transaction.commit();

    return classes;
  }
}

export default ClassesRepository;
