
import { useState } from "preact/hooks";
import { Link } from "react-router-dom";
import { useUser } from "../providers/UserProvider";

export function RegisterPage() {
  const { register } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (event: Event) => {
    event.preventDefault();
    setError("");
    try {
      await register(name, email, password);
    } catch (err) {
      setError(err instanceof Error ? err.message : "No fue posible registrarse.");
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-logo">F</div>
        <p className="eyebrow">ÚNETE A FRESHTRACK</p>
        <h1>Crea tu cuenta</h1>
        <p className="muted">Empieza a gestionar tus alimentos de forma inteligente.</p>

<div className="auth-brand">
  <img
    src="/FreshTraklogo.png"
    alt="FreshTrack"
    className="auth-logo"
  />
  <span>FreshTrack</span>
</div>

        <form onSubmit={submit} className="form-stack">
          <label>Nombre completo
            <input value={name} onInput={(e) => setName(e.currentTarget.value)} placeholder="Tu nombre" required />
          </label>
          <label>Correo electrónico
            <input type="email" value={email} onInput={(e) => setEmail(e.currentTarget.value)} placeholder="tu@correo.com" required />
          </label>
          <label>Contraseña
            <input type="password" value={password} onInput={(e) => setPassword(e.currentTarget.value)} placeholder="Crea una contraseña" required />
          </label>
          {error && <p className="error-message">{error}</p>}
          <button className="primary-button" type="submit">Crear cuenta</button>
        </form>
        <div className="auth-back-home">
  <Link to="/">← Volver a la página principal</Link>
</div>

        <p className="auth-footer">¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
      </section>
    </main>
  );
}
