export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  unit: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  city: string;
  membership: "regular" | "premium";
}

export interface Payment {
  id: string;
  clientId: string;
  amount: number;
  method: "card" | "transfer" | "cash";
  status: "paid" | "pending" | "failed";
  date: string;
}

export const products: Product[] = [
  { id: "p1", name: "Leche entera", category: "Lácteos", price: 4200, stock: 12, unit: "litro" },
  { id: "p2", name: "Manzana roja", category: "Frutas", price: 1200, stock: 30, unit: "unidad" },
  { id: "p3", name: "Arroz", category: "Granos", price: 3500, stock: 8, unit: "kg" },
  { id: "p4", name: "Espinaca", category: "Verduras", price: 2500, stock: 6, unit: "manojo" },
  { id: "p5", name: "Yogur natural", category: "Lácteos", price: 2800, stock: 10, unit: "unidad" }
];

export const clients: Client[] = [
  { id: "c1", name: "Laura Gómez", email: "laura@example.com", city: "Cali", membership: "premium" },
  { id: "c2", name: "Andrés Pérez", email: "andres@example.com", city: "Bogotá", membership: "regular" },
  { id: "c3", name: "Camila Rojas", email: "camila@example.com", city: "Medellín", membership: "regular" }
];

export const payments: Payment[] = [
  { id: "pay1", clientId: "c1", amount: 18900, method: "card", status: "paid", date: "2026-10-15" },
  { id: "pay2", clientId: "c2", amount: 7500, method: "transfer", status: "pending", date: "2026-10-17" },
  { id: "pay3", clientId: "c3", amount: 12600, method: "cash", status: "paid", date: "2026-10-18" }
];
