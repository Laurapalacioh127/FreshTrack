import { FeaturePage } from "../components/FeaturePage/FeaturePage";
import { useUser } from "../providers/UserProvider";

export function ProfilePage() {
  const { user } = useUser();

  return (
    <FeaturePage title="Mi perfil" subtitle="Consulta tu información de usuario.">
      <section className="panel profile-panel">
        <div className="profile-avatar">{user?.name.charAt(0).toUpperCase()}</div>
        <h2>{user?.name}</h2>
        <p className="muted">{user?.email}</p>
        <div className="profile-details">
          <div><span>Tipo de cuenta</span><strong>{user?.role === "admin" ? "Administrador" : "Usuario"}</strong></div>
          <div><span>Aplicación</span><strong>FreshTrack</strong></div>
          <div><span>Modo</span><strong>Demostración local</strong></div>
        </div>
      </section>
    </FeaturePage>
  );
}
