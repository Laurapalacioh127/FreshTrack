import { paymentsRepository } from "./payments.repository";

export const paymentsService = {
  getAll: () => paymentsRepository.findAll(),
  getById: (id: string) => paymentsRepository.findById(id)
};
