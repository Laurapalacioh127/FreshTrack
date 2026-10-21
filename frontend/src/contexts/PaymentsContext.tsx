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

export interface Payment {
  id: string;
  clientId: string;
  amount: number;
  method: "card" | "transfer" | "cash";
  status: "paid" | "pending" | "failed";
  date: string;
}

interface PaymentsContextType {
  payments: Payment[];
  loading: boolean;
  error: string | null;
  refreshPayments: () => Promise<void>;
}

const PaymentsContext = createContext<PaymentsContextType | undefined>(
  undefined
);

export function PaymentsProvider({ children }: { children: ReactNode }) {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshPayments = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get<{ success: boolean; data: Payment[] }>(
        "/payments"
      );
      setPayments(response.data.data);
    } catch {
      setError("No fue posible cargar los pagos.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let active = true;

    api
      .get<{ success: boolean; data: Payment[] }>("/payments")
      .then((response) => {
        if (active) {
          setPayments(response.data.data);
        }
      })
      .catch(() => {
        if (active) {
          setError("No fue posible cargar los pagos.");
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
    <PaymentsContext.Provider
      value={{ payments, loading, error, refreshPayments }}
    >
      {children}
    </PaymentsContext.Provider>
  );
}

export function usePayments() {
  const context = useContext(PaymentsContext);

  if (!context) {
    throw new Error("usePayments debe usarse dentro de PaymentsProvider.");
  }

  return context;
}
