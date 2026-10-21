
import Link from "next/link";

export function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-nav">
        <Link href="/" className="landing-brand">
          <span className="landing-brand-mark">F</span>
          <span>FreshTrack</span>
        </Link>

        <nav className="landing-nav-actions">
          <Link href="/login" className="landing-login-link">
            Iniciar sesión
          </Link>
          <Link href="/register" className="button-primary landing-nav-cta">
            Crear cuenta
          </Link>
        </nav>
      </header>

      <main>
        <section className="landing-hero">
          <div className="landing-hero-copy">
            <div className="landing-pill">
              <span className="landing-pill-dot" />
              ALIMENTACIÓN INTELIGENTE Y SOSTENIBLE
            </div>

            <h1>
              Cuida tus alimentos.
              <br />
              <span>Transforma tus hábitos.</span>
            </h1>

            <p className="landing-description">
              Organiza tu inventario, descubre recetas con lo que ya tienes
              y aprovecha mejor tus alimentos. Todo en un solo lugar.
            </p>

            <div className="landing-hero-actions">
              <Link href="/register" className="button-primary">
                Comenzar gratis
                <span aria-hidden="true"> →</span>
              </Link>

              <Link href="/login" className="button-secondary">
                Ya tengo una cuenta
              </Link>
            </div>

            <div className="landing-trust">
              <span className="landing-trust-icon">✓</span>
              Organiza tu cocina de forma sencilla
              <span className="landing-trust-separator">·</span>
              <span className="landing-trust-icon">✓</span>
              Reduce el desperdicio
            </div>
          </div>

          <div className="landing-visual" aria-label="Vista ilustrativa de FreshTrack">
            <div className="landing-orb landing-orb-blue" />
            <div className="landing-orb landing-orb-pink" />

            <div className="landing-preview">
              <div className="landing-preview-header">
                <div>
                  <span className="landing-preview-eyebrow">
                    TU ESPACIO
                  </span>
                  <h2>Mi cocina</h2>
                </div>
                <span className="landing-preview-leaf">✳</span>
              </div>

              <div className="landing-preview-summary">
                <div>
                  <span>Inventario</span>
                  <strong>Organizado</strong>
                  <small>Todo bajo control</small>
                </div>
                <div className="landing-preview-summary-icon">▤</div>
              </div>

              <div className="landing-preview-section">
                <div className="landing-preview-section-title">
                  <strong>Tu inventario</strong>
                  <span>Ejemplo</span>
                </div>

                <div className="landing-food-row">
                  <span className="landing-food-icon food-green">🥑</span>
                  <div className="landing-food-info">
                    <strong>Aguacate</strong>
                    <span>Frutas y verduras</span>
                  </div>
                  <span className="landing-food-status status-fresh">
                    Fresco
                  </span>
                </div>

                <div className="landing-food-row">
                  <span className="landing-food-icon food-pink">🍓</span>
                  <div className="landing-food-info">
                    <strong>Fresas</strong>
                    <span>Frutas</span>
                  </div>
                  <span className="landing-food-status status-soon">
                    Revisar
                  </span>
                </div>

                <div className="landing-food-row">
                  <span className="landing-food-icon food-yellow">🥛</span>
                  <div className="landing-food-info">
                    <strong>Leche</strong>
                    <span>Lácteos</span>
                  </div>
                  <span className="landing-food-status status-fresh">
                    Fresco
                  </span>
                </div>
              </div>

              <div className="landing-preview-tip">
                <span className="landing-tip-icon">✦</span>
                <div>
                  <strong>Una mejor idea para hoy</strong>
                  <p>Aprovecha tus ingredientes con nuevas recetas.</p>
                </div>
              </div>
            </div>

            <div className="landing-float-card">
              <span className="landing-float-icon">♻</span>
              <div>
                <strong>Menos desperdicio</strong>
                <span>Mejores hábitos cada día</span>
              </div>
            </div>
          </div>
        </section>

        <section className="landing-features">
          <div className="landing-section-heading">
            <span>TODO LO QUE NECESITAS</span>
            <h2>Una cocina más organizada empieza aquí.</h2>
            <p>
              Herramientas sencillas para tomar mejores decisiones con
              tus alimentos.
            </p>
          </div>

          <div className="landing-feature-grid">
            <article className="landing-feature-card feature-blue">
              <div className="landing-feature-icon">▤</div>
              <h3>Controla tu inventario</h3>
              <p>
                Registra tus productos, consulta las cantidades y revisa
                las fechas de vencimiento.
              </p>
            </article>

            <article className="landing-feature-card feature-pink">
              <div className="landing-feature-icon">♡</div>
              <h3>Descubre recetas</h3>
              <p>
                Encuentra ideas para preparar comidas y aprovechar
                los ingredientes que tienes disponibles.
              </p>
            </article>

            <article className="landing-feature-card feature-green">
              <div className="landing-feature-icon">♻</div>
              <h3>Aprovecha más</h3>
              <p>
                Organiza tus compras y explora opciones para dar una
                segunda oportunidad a los alimentos.
              </p>
            </article>
          </div>
        </section>

        <section className="landing-bottom-cta">
          <div>
            <span>EMPIEZA HOY</span>
            <h2>Pequeños cambios. Grandes hábitos.</h2>
            <p>Haz que cada alimento cuente con FreshTrack.</p>
          </div>
          <Link href="/register" className="button-light">
            Crear mi cuenta <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>

      <footer className="landing-footer">
        <Link href="/" className="landing-brand">
          <span className="landing-brand-mark">F</span>
          <span>FreshTrack</span>
        </Link>
        <span>Organiza mejor. Aprovecha más.</span>
      </footer>
    </div>
  );
}
