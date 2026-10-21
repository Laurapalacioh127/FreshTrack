
import type { ComponentChildren } from "preact";
import { Sidebar } from "./Sidebar";

type Props = {
  title: string;
  subtitle: string;
  children: ComponentChildren;
};

export function AppLayout({ title, subtitle, children }: Props) {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <header className="page-header">
          <div>
            <div className="eyebrow">FRESHTRACK / GESTIÓN INTELIGENTE</div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className="header-badge">
            <span className="status-dot" /> Datos de demostración
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
