
export type UserRole = "user" | "admin";

export interface AppUser {
  name: string;
  email: string;
  role: UserRole;
}

// Alias para utilizar el tipo User cuando sea necesario.
export type User = AppUser;

export interface FoodItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  expiry: string;
}

export interface ShoppingItem {
  id: number;
  name: string;
  quantity: string;
  checked: boolean;
}

export interface Recipe {
  id: number;
  name: string;
  description: string;
  time: string;
  category: string;
  ingredients?: string[];
  instructions?: string[];
}

export type DonationStatus = "Pendiente" | "Aprobada" | "Rechazada";

export interface Donation {
  id: number;
  food: string;
  quantity: string;
  status: DonationStatus;
  owner: string;
}

export interface AppStats {
  totalFoods: number;
  expiringFoods: number;
  pendingShoppingItems: number;
  pendingDonations: number;
}
