import { Router } from "express";
import { productsController } from "./products.controller";

export const productsRouter = Router();

productsRouter.get("/", productsController.getAll);
productsRouter.get("/:id", productsController.getById);
