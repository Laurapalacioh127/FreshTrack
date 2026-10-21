
import type { ComponentChildren } from "preact";
import { Navigate } from "react-router-dom";
import { useUser } from "../../providers/UserProvider";
import type { UserRole } from "../../utils/storage";

type Props = {
  children: ComponentChildren;
  role?: UserRole;
};

export function ProtectedRoute({ children, role }: Props) {
  const { user } = useUser();

  if (!user) return <Navigate to="/login" replace />;

  if (role && user.role !== role) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/dashboard"} replace />;
  }

  return <>{children}</>;
}
