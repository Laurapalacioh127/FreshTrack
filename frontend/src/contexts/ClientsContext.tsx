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

export interface Client {
  id: string;
  name: string;
  email: string;
  city: string;
  membership: "regular" | "premium";
}

interface ClientsContextType {
  clients: Client[];
  loading: boolean;
  error: string | null;
  refreshClients: () => Promise<void>;
}

const ClientsContext = createContext<ClientsContextType | undefined>(
  undefined
);

export function ClientsProvider({ children }: { children: ReactNode }) {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshClients = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get<{ success: boolean; data: Client[] }>(
        "/clients"
      );
      setClients(response.data.data);
    } catch {
      setError("No fue posible cargar los clientes.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let active = true;

    api
      .get<{ success: boolean; data: Client[] }>("/clients")
      .then((response) => {
        if (active) {
          setClients(response.data.data);
        }
      })
      .catch(() => {
        if (active) {
          setError("No fue posible cargar los clientes.");
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
    <ClientsContext.Provider
      value={{ clients, loading, error, refreshClients }}
    >
      {children}
    </ClientsContext.Provider>
  );
}

export function useClients() {
  const context = useContext(ClientsContext);

  if (!context) {
    throw new Error("useClients debe usarse dentro de ClientsProvider.");
  }

  return context;
}
