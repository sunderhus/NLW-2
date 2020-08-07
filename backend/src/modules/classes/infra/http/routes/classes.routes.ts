import { Router } from "express";
import ClassesController from "../controllers/ClassesController";

const classRoutes = Router();

const classesController = new ClassesController();

classRoutes.get("/", classesController.index);
classRoutes.post("/", classesController.create);

export default classRoutes;
