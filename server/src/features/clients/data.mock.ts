export interface Client {
  id: string;
  name: string;
  email: string;
  city: string;
  membership: "regular" | "premium";
}

export const clientsMock: Client[] = [
  { id: "c1", name: "Laura Gómez", email: "laura@example.com", city: "Cali", membership: "premium" },
  { id: "c2", name: "Andrés Pérez", email: "andres@example.com", city: "Bogotá", membership: "regular" },
  { id: "c3", name: "Camila Rojas", email: "camila@example.com", city: "Medellín", membership: "regular" }
];
