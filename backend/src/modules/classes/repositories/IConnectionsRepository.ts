import ICreateConnectionsDTO from "../dtos/ICreateConnectionsDTO";

export default interface IConnectionsRepository {
  create(payload: ICreateConnectionsDTO): Promise<void>;
  index(): Promise<number>;
}
