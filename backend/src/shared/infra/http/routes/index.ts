import { Router } from "express";

import classesRouter from "@modules/classes/infra/http/routes/classes.routes";

const routes = Router();

routes.use("/classes", classesRouter);

export default routes;
