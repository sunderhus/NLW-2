import { Request, Response } from "express";
import { container } from "tsyringe";

import CreateClassService from "@modules/classes/services/CreateClassService";

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
}
