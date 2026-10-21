export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  unit: string;
}

export const productsMock: Product[] = [
  { id: "p1", name: "Leche entera", category: "Lácteos", price: 4200, stock: 12, unit: "litro" },
  { id: "p2", name: "Manzana roja", category: "Frutas", price: 1200, stock: 30, unit: "unidad" },
  { id: "p3", name: "Arroz", category: "Granos", price: 3500, stock: 8, unit: "kg" },
  { id: "p4", name: "Espinaca", category: "Verduras", price: 2500, stock: 6, unit: "manojo" },
  { id: "p5", name: "Yogur natural", category: "Lácteos", price: 2800, stock: 10, unit: "unidad" }
];
