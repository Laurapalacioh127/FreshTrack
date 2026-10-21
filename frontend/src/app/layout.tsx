import type { Metadata } from "next";
import "./globals.css";
import { ProductsProvider } from "../contexts/ProductsContext";
import { ClientsProvider } from "../contexts/ClientsContext";
import { PaymentsProvider } from "../contexts/PaymentsContext";

export const metadata: Metadata = {
  title: "FreshTrack | Alimentación inteligente",
  description:
    "Organiza tus alimentos, aprovecha tus ingredientes y reduce el desperdicio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ProductsProvider>
          <ClientsProvider>
            <PaymentsProvider>{children}</PaymentsProvider>
          </ClientsProvider>
        </ProductsProvider>
      </body>
    </html>
  );
}
