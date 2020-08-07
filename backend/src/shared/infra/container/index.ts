import { container } from "tsyringe";

import IClassesRepository from "@modules/classes/repositories/IClassesRepository";
import ClassesRepository from "@modules/classes/infra/knex/repositories/ClassesRepository";

container.registerSingleton<IClassesRepository>(
  "ClassesRepository",
  ClassesRepository
);
