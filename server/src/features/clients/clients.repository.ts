import { clientsMock, type Client } from "./data.mock";

export const clientsRepository = {
  findAll: (): Client[] => clientsMock,
  findById: (id: string): Client | undefined =>
    clientsMock.find((client) => client.id === id)
};
