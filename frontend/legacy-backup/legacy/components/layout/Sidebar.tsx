
import { Link, NavLink } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";

export function Sidebar() {
  const { user, logout } = useUser();
  const isAdmin = user?.role === "admin";

  const links = isAdmin
    ? [
        { to: "/admin", label: "Panel administrativo", icon: "▦" },
        { to: "/donations", label: "Donaciones", icon: "♡" },
        { to: "/recipes", label: "Recetas", icon: "♧" },
        { to: "/inventory", label: "Productos", icon: "▤" },
      ]
    : [
        { to: "/dashboard", label: "Resumen", icon: "▦" },
        { to: "/inventory", label: "Mi inventario", icon: "▤" },
        { to: "/shopping", label: "Lista de mercado", icon: "☷" },
        { to: "/recipes", label: "Recetas", icon: "♧" },
        { to: "/donations", label: "Donaciones", icon: "♡" },
        { to: "/profile", label: "Mi perfil", icon: "◉" },
      ];

  return (
    <aside className="sidebar">
      <Link to="/" className="brand">
        <img
          src="/FreshTraklogo.png"
          alt="Logo de FreshTrack"
          className="brand-logo"
        />
        <span>FreshTrack</span>
      </Link>

      <div className="sidebar-caption">
        {isAdmin ? "ADMINISTRACIÓN" : "MENÚ PRINCIPAL"}
      </div>

      <nav className="side-nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
          >
            <span className="nav-icon" aria-hidden="true">
              {link.icon}
            </span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="user-mini">
          <div className="avatar">
            {user?.name?.charAt(0).toUpperCase() ?? "U"}
          </div>

          <div className="user-mini-info">
            <strong>{user?.name ?? "Usuario"}</strong>
            <span>{isAdmin ? "Administrador" : "Usuario"}</span>
          </div>
        </div>

        <button
          type="button"
          className="logout-button"
          onClick={logout}
        >
          <span aria-hidden="true">↪</span>
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
}
