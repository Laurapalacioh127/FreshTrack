import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}