import { useState } from "preact/hooks";
import { Link } from "react-router-dom";
import { useUser } from "../providers/UserProvider";

export function LoginPage() {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (event: Event) => {
    event.preventDefault();
    setError("");
    try {
      await login(email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No fue posible ingresar.");
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-logo">F</div>
        <p className="eyebrow">MENOS DESPERDICIO, MÁS BIENESTAR</p>
        <h1>Bienvenido a FreshTrack</h1>
        <p className="muted">Organiza tus alimentos y aprovecha cada ingrediente.</p>

<div className="auth-brand">
  <img
    src="/FreshTraklogo.png"
    alt="FreshTrack"
    className="auth-logo"
  />
  <span>FreshTrack</span>
</div>

        <form onSubmit={submit} className="form-stack">
          <label>Correo electrónico
            <input type="email" value={email} onInput={(e) => setEmail(e.currentTarget.value)} placeholder="tu@correo.com" required />
          </label>
          <label>Contraseña
            <input type="password" value={password} onInput={(e) => setPassword(e.currentTarget.value)} placeholder="Tu contraseña" required />
          </label>
          {error && <p className="error-message">{error}</p>}
          <button className="primary-button" type="submit">Iniciar sesión</button>
        </form>

        <p className="auth-footer">¿No tienes cuenta? <Link to="/register">Regístrate</Link></p>
        <p className="demo-note">Demo: cualquier correo y contraseña no vacíos.</p>
        <div className="auth-back-home">
        <Link to="/">← Volver a la página principal</Link>
      </div>
      </section>
    </main>
  );
}
