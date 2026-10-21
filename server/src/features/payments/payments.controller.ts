import type { Request, Response } from "express";
import { paymentsService } from "./payments.service";

export const paymentsController = {
  getAll: (_req: Request, res: Response) => {
    res.status(200).json({ success: true, data: paymentsService.getAll() });
  },
  getById: (req: Request, res: Response) => {
    const payment = paymentsService.getById(String(req.params.id));
    if (!payment) {
      res.status(404).json({ success: false, message: "Pago no encontrado" });
      return;
    }
    res.status(200).json({ success: true, data: payment });
  }
};
