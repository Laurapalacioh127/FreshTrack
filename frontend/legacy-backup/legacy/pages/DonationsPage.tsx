import { FeaturePage } from "../components/FeaturePage/FeaturePage";
import { useFreshTrack } from "../hooks/useFreshTrack";
import { useUser } from "../providers/UserProvider";

export function DonationsPage() {
  const { donations, updateDonation } = useFreshTrack();
  const { user } = useUser();
  const isAdmin = user?.role === "admin";

  return (
    <FeaturePage title="Donaciones" subtitle="Promueve el aprovechamiento de alimentos y ayuda a tu comunidad.">
      {!isAdmin && (
        <section className="welcome-banner">
          <div><h2>Comparte lo que puedes aprovechar</h2><p>En esta versión demostrativa puedes consultar el estado de las donaciones registradas.</p></div>
          <span className="banner-illustration">♡</span>
        </section>
      )}
      <section className="panel">
        <div className="panel-heading"><h2>{isAdmin ? "Gestión de donaciones" : "Donaciones registradas"}</h2><span className="count-pill">{donations.length} registros</span></div>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Alimento</th><th>Cantidad</th><th>Responsable</th><th>Estado</th>{isAdmin && <th>Acciones</th>}</tr></thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td><strong>{donation.food}</strong></td><td>{donation.quantity}</td><td>{donation.owner}</td>
                  <td><span className={`status status-${donation.status.toLowerCase()}`}>{donation.status}</span></td>
                  {isAdmin && <td className="action-buttons">
                    {donation.status === "Pendiente" && <>
                      <button className="text-button" onClick={() => updateDonation(donation.id, "Aprobada")}>Aprobar</button>
                      <button className="text-button danger-text" onClick={() => updateDonation(donation.id, "Rechazada")}>Rechazar</button>
                    </>}
                  </td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </FeaturePage>
  );
}
