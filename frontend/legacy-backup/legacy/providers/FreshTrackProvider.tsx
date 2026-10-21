
import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";
import type { ComponentChildren } from "preact";

import {
  initialInventory,
  initialRecipes,
  initialDonations,
  initialShoppingList,
} from "../utils/mockData";

import type {
  FoodItem,
  Recipe,
  Donation,
  ShoppingItem,
  DonationStatus,
} from "../types";

interface FreshTrackContextType {
  inventory: FoodItem[];
  recipes: Recipe[];
  donations: Donation[];
  shoppingList: ShoppingItem[];
  addFood: (food: Omit<FoodItem, "id">) => void;
  removeFood: (id: number) => void;
  addShoppingItem: (name: string) => void;
  toggleShoppingItem: (id: number) => void;
  updateDonation: (id: number, status: DonationStatus) => void;
}

const FreshTrackContext =
  createContext<FreshTrackContextType | null>(null);

export function FreshTrackProvider({
  children,
}: {
  children: ComponentChildren;
}) {
  const [inventory, setInventory] =
    useState<FoodItem[]>(initialInventory);

  const [recipes] = useState<Recipe[]>(initialRecipes);

  const [donations, setDonations] =
    useState<Donation[]>(initialDonations);

  const [shoppingList, setShoppingList] =
    useState<ShoppingItem[]>(initialShoppingList);

  const addFood = (food: Omit<FoodItem, "id">) => {
    setInventory((current) => [
      ...current,
      { ...food, id: Date.now() },
    ]);
  };

  const removeFood = (id: number) => {
    setInventory((current) =>
      current.filter((food) => food.id !== id)
    );
  };

  const addShoppingItem = (name: string) => {
    const cleanName = name.trim();

    if (!cleanName) {
      return;
    }

    setShoppingList((current) => [
      ...current,
      {
        id: Date.now(),
        name: cleanName,
        quantity: "1 unidad",
        checked: false,
      },
    ]);
  };

  const toggleShoppingItem = (id: number) => {
    setShoppingList((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, checked: !item.checked }
          : item
      )
    );
  };

  const updateDonation = (
    id: number,
    status: DonationStatus
  ) => {
    setDonations((current) =>
      current.map((donation) =>
        donation.id === id
          ? { ...donation, status }
          : donation
      )
    );
  };

  return (
    <FreshTrackContext.Provider
      value={{
        inventory,
        recipes,
        donations,
        shoppingList,
        addFood,
        removeFood,
        addShoppingItem,
        toggleShoppingItem,
        updateDonation,
      }}
    >
      {children}
    </FreshTrackContext.Provider>
  );
}

export function useFreshTrack() {
  const context = useContext(FreshTrackContext);

  if (!context) {
    throw new Error(
      "useFreshTrack debe utilizarse dentro de FreshTrackProvider"
    );
  }

  return context;
}
