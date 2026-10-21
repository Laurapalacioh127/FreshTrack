import { Link } from "react-router-dom";
import { StatCard } from "../components/StatCard/StatCard";
import { useFreshTrack } from "../hooks/useFreshTrack";
import { FeaturePage } from "../components/FeaturePage/FeaturePage";

export function AdminPage() {
  const { inventory, donations, recipes } = useFreshTrack();

  return (
    <FeaturePage title="Panel administrativo" subtitle="Supervisa los datos y las actividades de FreshTrack.">
      <section className="welcome-banner">
        <div><p className="eyebrow">CENTRO DE CONTROL</p><h2>Administración FreshTrack</h2><p>Gestiona los recursos de la aplicación desde un solo lugar.</p></div>
        <span className="banner-illustration">▦</span>
      </section>
      <section className="stats-grid">
        <StatCard label="Productos" value={inventory.length} note="En los datos de demostración" icon="▤" />
        <StatCard label="Recetas" value={recipes.length} note="Disponibles en el catálogo" icon="♧" />
        <StatCard label="Donaciones pendientes" value={donations.filter((item) => item.status === "Pendiente").length} note="Requieren revisión" icon="♡" />
        <StatCard label="Donaciones aprobadas" value={donations.filter((item) => item.status === "Aprobada").length} note="Aprobadas en la demo" icon="✓" />
      </section>
      <section className="content-grid">
        <article className="panel">
          <h2>Acciones de administración</h2>
          <div className="admin-action"><div><strong>Revisar donaciones</strong><p>Aprueba o rechaza solicitudes.</p></div><Link className="secondary-button" to="/donations">Gestionar</Link></div>
          <div className="admin-action"><div><strong>Gestionar productos</strong><p>Consulta los productos registrados.</p></div><Link className="secondary-button" to="/inventory">Consultar</Link></div>
          <div className="admin-action"><div><strong>Consultar recetas</strong><p>Revisa el catálogo disponible.</p></div><Link className="secondary-button" to="/recipes">Consultar</Link></div>
        </article>
        <article className="panel tips-panel"><span className="tip-icon">✦</span><h2>Estado del sistema</h2><p>La interfaz funciona con datos simulados en el navegador. Los cambios no se guardan en una base de datos.</p></article>
      </section>
    </FeaturePage>
  );
}
