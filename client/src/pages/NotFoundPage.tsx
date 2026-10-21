
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="not-found">
      <div className="auth-logo">F</div>
      <p className="eyebrow">ERROR 404</p>
      <h1>Página no encontrada</h1>
      <p className="muted">La página que buscas no existe.</p>
      <Link to="/" className="primary-button">Volver al inicio</Link>
    </main>
  );
}
