
import { Link } from "react-router-dom";
import { StatCard } from "../components/StatCard/StatCard";
import { useFreshTrack } from "../hooks/useFreshTrack";
import { FeaturePage } from "../components/FeaturePage/FeaturePage";

export function DashboardPage() {
  const { inventory, shoppingList, donations } = useFreshTrack();

  const expiring = inventory.filter((item) => {
    const days = (new Date(item.expiry).getTime() - Date.now()) / 86400000;
    return days >= 0 && days <= 3;
  }).length;

  return (
    <FeaturePage title="Resumen general" subtitle="Aquí tienes el estado de tus alimentos.">
      <section className="welcome-banner">
        <div>
          <p className="eyebrow">TU COCINA, BAJO CONTROL</p>
          <h2>¡Aprovecha cada alimento!</h2>
          <p>Consulta tus existencias y reduce el desperdicio desde un solo lugar.</p>
        </div>
        <span className="banner-illustration">♧</span>
      </section>

      <section className="stats-grid">
        <StatCard label="Alimentos registrados" value={inventory.length} note="En tu inventario" icon="▤" />
        <StatCard label="Próximos a vencer" value={expiring} note="En los próximos 3 días" icon="◷" />
        <StatCard label="Lista de mercado" value={shoppingList.filter((item) => !item.checked).length} note="Artículos pendientes" icon="☷" />
        <StatCard label="Donaciones" value={donations.filter((item) => item.status === "Pendiente").length} note="Pendientes de revisión" icon="♡" />
      </section>

      <section className="content-grid">
        <article className="panel">
          <div className="panel-heading"><h2>Próximos vencimientos</h2><Link to="/inventory">Ver inventario</Link></div>
          {inventory.slice().sort((a, b) => a.expiry.localeCompare(b.expiry)).slice(0, 4).map((item) => (
            <div className="list-row" key={item.id}>
              <div className="food-symbol">♧</div>
              <div className="row-main"><strong>{item.name}</strong><span>{item.quantity} {item.unit}</span></div>
              <span className="date-label">{item.expiry}</span>
            </div>
          ))}
        </article>

        <article className="panel tips-panel">
          <span className="tip-icon">✦</span>
          <h2>Consejo FreshTrack</h2>
          <p>Ubica los alimentos que vencen primero en un lugar visible y planifica tus recetas para aprovecharlos.</p>
          <Link to="/recipes" className="secondary-button">Explorar recetas</Link>
        </article>
      </section>
    </FeaturePage>
  );
}
