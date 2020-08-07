import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import ICreateClassesDTO from "../dto/ICreateClassesDTO";
import IClass from "../infra/knex/entities/Class";
import IClassesRepository from "../repositories/IClassesRepository";
import IFilterClassesDTO from "../dto/IFilterClassesDTO";
import convertHourToMinutes from "@shared/utils/convertHourToMinutes";

@injectable()
class FindClassesByFilterService {
  constructor(
    @inject("ClassesRepository")
    private classesRepository: IClassesRepository
  ) {}

  public async execute({
    subject,
    time,
    week_day,
  }: IFilterClassesDTO): Promise<IClass[]> {
    if (!subject || !time || !week_day) {
      throw new AppError("Missing filters.");
    }

    const timeInMinutes = convertHourToMinutes(time);

    const classes = await this.classesRepository.findAllClassesByFilter({
      subject,
      time,
      week_day,
    });

    return classes;
  }
}

export default FindClassesByFilterService;
