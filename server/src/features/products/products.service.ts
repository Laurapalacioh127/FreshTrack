import { productsRepository } from "./products.repository";

export const productsService = {
  getAll: () => productsRepository.findAll(),
  getById: (id: string) => productsRepository.findById(id)
};
