import { productsMock, type Product } from "./data.mock";

export const productsRepository = {
  findAll: (): Product[] => productsMock,
  findById: (id: string): Product | undefined =>
    productsMock.find((product) => product.id === id)
};
