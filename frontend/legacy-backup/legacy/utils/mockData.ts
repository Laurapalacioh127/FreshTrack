
import type {
  FoodItem,
  Recipe,
  Donation,
  ShoppingItem,
} from "../types";

export const initialInventory: FoodItem[] = [
  {
    id: 1,
    name: "Leche",
    category: "Lácteos",
    quantity: 2,
    unit: "litros",
    expiry: "2026-10-22",
  },
  {
    id: 2,
    name: "Tomates",
    category: "Verduras",
    quantity: 6,
    unit: "unidades",
    expiry: "2026-10-24",
  },
  {
    id: 3,
    name: "Arroz",
    category: "Granos",
    quantity: 1,
    unit: "kg",
    expiry: "2027-04-20",
  },
  {
    id: 4,
    name: "Yogur",
    category: "Lácteos",
    quantity: 4,
    unit: "unidades",
    expiry: "2026-10-21",
  },
  {
    id: 5,
    name: "Manzanas",
    category: "Frutas",
    quantity: 5,
    unit: "unidades",
    expiry: "2026-10-27",
  },
];

export const initialRecipes: Recipe[] = [
  {
    id: 1,
    name: "Ensalada fresca",
    description: "Una ensalada con tomate y vegetales.",
    time: "15 min",
    category: "Almuerzo",
    ingredients: ["Tomates", "Lechuga", "Aceite de oliva"],
    instructions: [
      "Lava y corta los vegetales.",
      "Mezcla los ingredientes.",
      "Agrega el aceite de oliva y sirve.",
    ],
  },
  {
    id: 2,
    name: "Batido de frutas",
    description: "Una bebida sencilla para aprovechar frutas.",
    time: "5 min",
    category: "Bebidas",
    ingredients: ["Banano", "Leche", "Avena"],
    instructions: [
      "Agrega todos los ingredientes a la licuadora.",
      "Licúa hasta obtener una mezcla homogénea.",
      "Sirve inmediatamente.",
    ],
  },
  {
    id: 3,
    name: "Arroz con verduras",
    description: "Una receta práctica para aprovechar ingredientes.",
    time: "25 min",
    category: "Almuerzo",
    ingredients: ["Arroz", "Tomates", "Verduras"],
    instructions: [
      "Cocina el arroz.",
      "Lava y corta las verduras.",
      "Mezcla las verduras con el arroz y termina la cocción.",
    ],
  },
];

export const initialDonations: Donation[] = [
  {
    id: 1,
    food: "Frutas variadas",
    quantity: "3 kg",
    status: "Pendiente",
    owner: "María Gómez",
  },
  {
    id: 2,
    food: "Pan empacado",
    quantity: "10 unidades",
    status: "Aprobada",
    owner: "Carlos Ruiz",
  },
  {
    id: 3,
    food: "Verduras",
    quantity: "2 kg",
    status: "Pendiente",
    owner: "Ana Pérez",
  },
];

export const initialShoppingList: ShoppingItem[] = [
  {
    id: 1,
    name: "Huevos",
    quantity: "12 unidades",
    checked: false,
  },
  {
    id: 2,
    name: "Avena",
    quantity: "500 g",
    checked: true,
  },
  {
    id: 3,
    name: "Banano",
    quantity: "6 unidades",
    checked: false,
  },
];
