import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateClassService from "@modules/classes/services/CreateClassService";
import AppError from "@shared/errors/AppError";
import FindClassesByFilterService from "@modules/classes/services/FindClassesByFilterService";
import IFilterClassesDTO from "@modules/classes/dto/IFilterClassesDTO";

export default class ClassesController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule,
      } = request.body;

      const createClass = container.resolve(CreateClassService);

      const newClass = await createClass.execute({
        avatar,
        cost,
        subject,
        bio,
        name,
        schedule,
        whatsapp,
      });

      return response.status(201).json(newClass);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const { subject, time, week_day } = request.query;

      const listByFilter = container.resolve(FindClassesByFilterService);

      const classes = await listByFilter.execute({
        subject,
        time,
        week_day,
      } as IFilterClassesDTO);

      return response.status(200).json(classes);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}
