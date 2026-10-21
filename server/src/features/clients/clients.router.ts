import { Router } from "express";
import { clientsController } from "./clients.controller";

export const clientsRouter = Router();

clientsRouter.get("/", clientsController.getAll);
clientsRouter.get("/:id", clientsController.getById);
