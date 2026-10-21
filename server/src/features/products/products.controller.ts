import type { Request, Response } from "express";
import { productsService } from "./products.service";

export const productsController = {
  getAll: (_req: Request, res: Response) => {
    res.status(200).json({ success: true, data: productsService.getAll() });
  },
  getById: (req: Request, res: Response) => {
    const product = productsService.getById(String(req.params.id));
    if (!product) {
      res.status(404).json({ success: false, message: "Producto no encontrado" });
      return;
    }
    res.status(200).json({ success: true, data: product });
  }
};
