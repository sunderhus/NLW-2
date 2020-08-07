import CreateConnectionService from "@modules/classes/services/CreateConnectionService";
import { Request, Response } from "express";
import { container } from "tsyringe";
import TotalOfConnectionsService from "@modules/classes/services/TotalOfConnectionsService";

export default class ConnectionsController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const { user_id } = request.body;

      const createConnection = container.resolve(CreateConnectionService);

      await createConnection.execute({ user_id });

      return response.status(201).json();
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const totalOfConnections = container.resolve(TotalOfConnectionsService);

      const total = await totalOfConnections.execute();

      return response.status(200).json({ total });
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}
