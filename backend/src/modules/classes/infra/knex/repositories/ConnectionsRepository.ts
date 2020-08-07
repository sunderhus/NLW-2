import IConnectionsRepository from "@modules/classes/repositories/IConnectionsRepository";
import ICreateConnectionsDTO from "@modules/classes/dtos/ICreateConnectionsDTO";
import db from "@shared/infra/database/knex/connections";
import AppError from "@shared/errors/AppError";

class ConnectionsRepository implements IConnectionsRepository {
  async create({ user_id }: ICreateConnectionsDTO): Promise<void> {
    const transaction = await db.transaction();
    try {
      await transaction("connections").insert({
        user_id,
      });
      await transaction.commit();

      return;
    } catch {
      await transaction.rollback();

      throw new AppError("Fail on create connection.");
    }
  }
  async index(): Promise<number> {
    const transaction = await db.transaction();
    try {
      const totalConnections = await transaction("connections").count(
        "* as total"
      );

      await transaction.commit();
      const { total } = totalConnections[0];

      return Number(total);
    } catch {
      await transaction.rollback();

      throw new AppError("Something go wrong getting total of connections.");
    }
  }
}

export default ConnectionsRepository;
