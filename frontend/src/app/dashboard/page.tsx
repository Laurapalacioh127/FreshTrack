"use client";

import Link from "next/link";
import { useProducts } from "../../contexts/ProductsContext";
import { useClients } from "../../contexts/ClientsContext";
import { usePayments } from "../../contexts/PaymentsContext";

const money = (amount: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(amount);

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px 5%",
    background: "#f5f8fc",
    color: "#182230",
    fontFamily: "Arial, sans-serif",
  } as const,
  card: {
    background: "#fff",
    border: "1px solid #e5eaf1",
    borderRadius: "14px",
    padding: "22px",
    overflowX: "auto" as const,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    textAlign: "left" as const,
  },
  cell: {
    padding: "13px 10px",
    borderBottom: "1px solid #edf0f5",
    fontSize: "14px",
  },
};

export default function DashboardPage() {
  const products = useProducts();
  const clients = useClients();
  const payments = usePayments();

  const loading = products.loading || clients.loading || payments.loading;
  const errors = [products.error, clients.error, payments.error].filter(
    Boolean
  );

  return (
    <main style={styles.page}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        <div>
          <Link
            href="/"
            style={{
              color: "#5265d8",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            ← Volver a FreshTrack
          </Link>
          <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
            Panel de información
          </h1>
          <p style={{ color: "#667085", margin: 0 }}>
            Datos obtenidos desde la API de FreshTrack.
          </p>
        </div>
        <span
          style={{
            background: "#e7f8ee",
            color: "#187443",
            padding: "10px 14px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          API conectada
        </span>
      </header>

      {loading && <p>Cargando información...</p>}

      {errors.map((error, index) => (
        <p
          key={index}
          role="alert"
          style={{ color: "#b42318", background: "#fff0ef", padding: "12px" }}
        >
          {error}
        </p>
      ))}

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: "18px",
          marginBottom: "28px",
        }}
      >
        {[
          { label: "Productos", value: products.products.length },
          { label: "Clientes", value: clients.clients.length },
          { label: "Pagos registrados", value: payments.payments.length },
          {
            label: "Pagos completados",
            value: payments.payments.filter((p) => p.status === "paid").length,
          },
        ].map((item) => (
          <article
            key={item.label}
            style={{
              ...styles.card,
              borderTop: "4px solid #6574e8",
            }}
          >
            <p style={{ color: "#667085", marginTop: 0 }}>{item.label}</p>
            <strong style={{ fontSize: "30px" }}>{item.value}</strong>
          </article>
        ))}
      </section>

      <section style={{ ...styles.card, marginBottom: "24px" }}>
        <h2>Productos</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              {["Nombre", "Categoría", "Precio", "Stock", "Unidad"].map(
                (heading) => (
                  <th key={heading} style={styles.cell}>
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {products.products.map((product) => (
              <tr key={product.id}>
                <td style={styles.cell}>{product.name}</td>
                <td style={styles.cell}>{product.category}</td>
                <td style={styles.cell}>{money(product.price)}</td>
                <td style={styles.cell}>{product.stock}</td>
                <td style={styles.cell}>{product.unit}</td>
              </tr>
            ))}
            {!loading && products.products.length === 0 && (
              <tr>
                <td style={styles.cell} colSpan={5}>
                  No hay productos disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      <section style={{ ...styles.card, marginBottom: "24px" }}>
        <h2>Clientes</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              {["Nombre", "Correo", "Ciudad", "Membresía"].map((heading) => (
                <th key={heading} style={styles.cell}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clients.clients.map((client) => (
              <tr key={client.id}>
                <td style={styles.cell}>{client.name}</td>
                <td style={styles.cell}>{client.email}</td>
                <td style={styles.cell}>{client.city}</td>
                <td style={styles.cell}>{client.membership}</td>
              </tr>
            ))}
            {!loading && clients.clients.length === 0 && (
              <tr>
                <td style={styles.cell} colSpan={4}>
                  No hay clientes disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      <section style={styles.card}>
        <h2>Pagos</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              {["Referencia", "Cliente", "Valor", "Método", "Estado", "Fecha"].map(
                (heading) => (
                  <th key={heading} style={styles.cell}>
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {payments.payments.map((payment) => {
              const client = clients.clients.find(
                (item) => item.id === payment.clientId
              );

              return (
                <tr key={payment.id}>
                  <td style={styles.cell}>{payment.id}</td>
                  <td style={styles.cell}>
                    {client?.name ?? payment.clientId}
                  </td>
                  <td style={styles.cell}>{money(payment.amount)}</td>
                  <td style={styles.cell}>{payment.method}</td>
                  <td style={styles.cell}>{payment.status}</td>
                  <td style={styles.cell}>{payment.date}</td>
                </tr>
              );
            })}
            {!loading && payments.payments.length === 0 && (
              <tr>
                <td style={styles.cell} colSpan={6}>
                  No hay pagos disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
}
