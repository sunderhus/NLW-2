import ICreateClassesDTO from "../dto/ICreateClassesDTO";
import IClass from "../infra/knex/entities/Class";

export default interface IClassesRepository {
  create(data: ICreateClassesDTO): Promise<IClass>;
}
