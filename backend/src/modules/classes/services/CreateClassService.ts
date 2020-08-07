import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import ICreateClassesDTO from "../dtos/ICreateClassesDTO";
import IClass from "../infra/knex/entities/Class";
import IClassesRepository from "../repositories/IClassesRepository";

@injectable()
class CreateClassService {
  constructor(
    @inject("ClassesRepository")
    private classesRepository: IClassesRepository
  ) {}

  public async execute({
    name,
    bio,
    avatar,
    whatsapp,
    cost,
    subject,
    schedule,
  }: ICreateClassesDTO): Promise<IClass> {
    if (!name || !bio || !avatar || !whatsapp) {
      throw new AppError("You need to pass a valid Proffy information.");
    }

    if (!cost || !subject || schedule.length == 0) {
      throw new AppError("Inform valid class information.");
    }

    const createdClass = await this.classesRepository.create({
      name,
      bio,
      avatar,
      cost,
      whatsapp,
      subject,
      schedule,
    });

    return createdClass;
  }
}

export default CreateClassService;
