import { paymentsMock, type Payment } from "./data.mock";

export const paymentsRepository = {
  findAll: (): Payment[] => paymentsMock,
  findById: (id: string): Payment | undefined =>
    paymentsMock.find((payment) => payment.id === id)
};
