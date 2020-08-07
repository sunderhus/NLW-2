import { inject, injectable } from "tsyringe";
import IConnectionsRepository from "../repositories/IConnectionsRepository";
import ICreateConnectionsDTO from "../dtos/ICreateConnectionsDTO";
import AppError from "@shared/errors/AppError";

@injectable()
class CreateConnectionService {
  constructor(
    @inject("ConnectionsRepository")
    private connectionsRepository: IConnectionsRepository
  ) {}
  public async execute({ user_id }: ICreateConnectionsDTO): Promise<void> {
    if (!user_id) {
      throw new AppError("Please inform a  user to create a connection.");
    }

    await this.connectionsRepository.create({ user_id });

    return;
  }
}

export default CreateConnectionService;
