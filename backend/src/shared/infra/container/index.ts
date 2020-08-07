import { container } from "tsyringe";

import IClassesRepository from "@modules/classes/repositories/IClassesRepository";
import ClassesRepository from "@modules/classes/infra/knex/repositories/ClassesRepository";

import ConnectionsRepository from "@modules/classes/infra/knex/repositories/ConnectionsRepository";
import IConnectionsRepository from "@modules/classes/repositories/IConnectionsRepository";

container.registerSingleton<IClassesRepository>(
  "ClassesRepository",
  ClassesRepository
);
container.registerSingleton<IConnectionsRepository>(
  "ConnectionsRepository",
  ConnectionsRepository
);
