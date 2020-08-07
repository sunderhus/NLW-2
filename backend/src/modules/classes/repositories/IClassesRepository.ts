import ICreateClassesDTO from "../dto/ICreateClassesDTO";
import IClass from "../infra/knex/entities/Class";
import IFilterClassesDTO from "../dto/IFilterClassesDTO";

export default interface IClassesRepository {
  create(data: ICreateClassesDTO): Promise<IClass>;
  findAllClassesByFilter(filter: IFilterClassesDTO): Promise<IClass[]>;
}
