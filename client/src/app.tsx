
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { UserProvider, useUser } from "./providers/UserProvider";
import { FreshTrackProvider } from "./providers/FreshTrackProvider";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { DashboardPage } from "./pages/DashboardPage";
import { InventoryPage } from "./pages/InventoryPage";
import { ShoppingPage } from "./pages/ShoppingPage";
import { RecipesPage } from "./pages/RecipesPage";
import { DonationsPage } from "./pages/DonationsPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AdminPage } from "./pages/AdminPage";
import { NotFoundPage } from "./pages/NotFoundPage";


function AppRoutes() {
  const { user } = useUser();

  const homePath =
    user?.role === "admin" ? "/admin" : "/dashboard";

  return (
    <Routes>
      {/* Landing pública: no requiere iniciar sesión */}
      <Route path="/" element={<LandingPage />} />

      {/* Acceso y registro */}
      <Route
        path="/login"
        element={
          user ? <Navigate to={homePath} replace /> : <LoginPage />
        }
      />

      <Route
        path="/register"
        element={
          user ? <Navigate to={homePath} replace /> : <RegisterPage />
        }
      />

      {/* Rutas para usuarios */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="user">
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/inventory"
        element={
          <ProtectedRoute>
            <InventoryPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/shopping"
        element={
          <ProtectedRoute role="user">
            <ShoppingPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/recipes"
        element={
          <ProtectedRoute>
            <RecipesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/donations"
        element={
          <ProtectedRoute>
            <DonationsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute role="user">
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      {/* Panel de administrador */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminPage />
          </ProtectedRoute>
        }
      />

      {/* Página no encontrada */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <FreshTrackProvider>
          <AppRoutes />
        </FreshTrackProvider>
      </UserProvider>
    </BrowserRouter>
  );
}
