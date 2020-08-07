import ICreateClassesDTO from "../dtos/ICreateClassesDTO";
import IClass from "../infra/knex/entities/Class";
import IFilterClassesDTO from "../dtos/IFilterClassesDTO";
import IUsersClassessDTO from "../dtos/IUsersClassessDTO";

export default interface IClassesRepository {
  create(payload: ICreateClassesDTO): Promise<IClass>;
  findAllClassesByFilter(
    filter: IFilterClassesDTO
  ): Promise<IUsersClassessDTO[]>;
}
