import AppError from "@shared/errors/AppError";
import convertHourToMinutes from "@shared/utils/convertHourToMinutes";
import { inject, injectable } from "tsyringe";
import IFilterClassesDTO from "../dtos/IFilterClassesDTO";
import IUsersClassessDTO from "../dtos/IUsersClassessDTO";
import IClassesRepository from "../repositories/IClassesRepository";

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
  }: IFilterClassesDTO): Promise<IUsersClassessDTO[]> {
    if (!subject || !time || !week_day) {
      throw new AppError("Missing filters.");
    }

    const timeInMinutes = convertHourToMinutes(time as string);

    const classes = await this.classesRepository.findAllClassesByFilter({
      subject,
      time: timeInMinutes,
      week_day,
    });

    return classes;
  }
}

export default FindClassesByFilterService;
