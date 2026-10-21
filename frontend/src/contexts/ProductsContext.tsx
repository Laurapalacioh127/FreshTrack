"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import api from "../lib/api";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  unit: string;
}

interface ProductsContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  refreshProducts: () => Promise<void>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined
);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshProducts = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get<{ success: boolean; data: Product[] }>(
        "/products"
      );
      setProducts(response.data.data);
    } catch {
      setError("No fue posible cargar los productos.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let active = true;

    api
      .get<{ success: boolean; data: Product[] }>("/products")
      .then((response) => {
        if (active) {
          setProducts(response.data.data);
        }
      })
      .catch(() => {
        if (active) {
          setError("No fue posible cargar los productos.");
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, loading, error, refreshProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts debe usarse dentro de ProductsProvider.");
  }

  return context;
}
