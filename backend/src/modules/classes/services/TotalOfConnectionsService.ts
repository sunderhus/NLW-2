import { inject, injectable } from "tsyringe";
import IConnectionsRepository from "../repositories/IConnectionsRepository";
import ICreateConnectionsDTO from "../dtos/ICreateConnectionsDTO";
import AppError from "@shared/errors/AppError";

@injectable()
class TotalOfConnectionsService {
  constructor(
    @inject("ConnectionsRepository")
    private connectionsRepository: IConnectionsRepository
  ) {}
  public async execute(): Promise<number> {
    const totalOfConnections = await this.connectionsRepository.index();

    return totalOfConnections;
  }
}

export default TotalOfConnectionsService;
