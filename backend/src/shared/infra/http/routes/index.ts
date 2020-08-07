import { Router } from "express";

import classesRouter from "@modules/classes/infra/http/routes/classes.routes";
import connectionsRouter from "@modules/classes/infra/http/routes/connections.routes";

const routes = Router();

routes.use("/classes", classesRouter);
routes.use("/connections", connectionsRouter);

export default routes;
