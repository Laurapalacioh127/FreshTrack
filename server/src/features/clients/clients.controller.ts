import type { Request, Response } from "express";
import { clientsService } from "./clients.service";

export const clientsController = {
  getAll: (_req: Request, res: Response) => {
    res.status(200).json({ success: true, data: clientsService.getAll() });
  },
  getById: (req: Request, res: Response) => {
    const client = clientsService.getById(String(req.params.id));
    if (!client) {
      res.status(404).json({ success: false, message: "Cliente no encontrado" });
      return;
    }
    res.status(200).json({ success: true, data: client });
  }
};
