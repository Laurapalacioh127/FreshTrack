import { clientsRepository } from "./clients.repository";

export const clientsService = {
  getAll: () => clientsRepository.findAll(),
  getById: (id: string) => clientsRepository.findById(id)
};
