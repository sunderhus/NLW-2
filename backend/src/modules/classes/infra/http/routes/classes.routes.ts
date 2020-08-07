import { Router } from "express";
import ClassesController from "../controllers/ClassesController";

const classRouter = Router();

const classesController = new ClassesController();

classRouter.get("/", classesController.index);
classRouter.post("/", classesController.create);

export default classRouter;
