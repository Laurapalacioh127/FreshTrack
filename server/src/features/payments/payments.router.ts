import { Router } from "express";
import { paymentsController } from "./payments.controller";

export const paymentsRouter = Router();

paymentsRouter.get("/", paymentsController.getAll);
paymentsRouter.get("/:id", paymentsController.getById);
