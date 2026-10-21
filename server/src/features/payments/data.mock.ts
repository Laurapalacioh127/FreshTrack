export interface Payment {
  id: string;
  clientId: string;
  amount: number;
  method: "card" | "transfer" | "cash";
  status: "paid" | "pending" | "failed";
  date: string;
}

export const paymentsMock: Payment[] = [
  { id: "pay1", clientId: "c1", amount: 18900, method: "card", status: "paid", date: "2026-10-15" },
  { id: "pay2", clientId: "c2", amount: 7500, method: "transfer", status: "pending", date: "2026-10-17" },
  { id: "pay3", clientId: "c3", amount: 12600, method: "cash", status: "paid", date: "2026-10-18" }
];
