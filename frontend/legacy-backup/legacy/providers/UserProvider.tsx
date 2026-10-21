//Nota: esta autenticación es únicamente para la demostración del frontend, 
// no es segura ni sirve para producción. Para entrar al portal de administrador, 
// utiliza un correo que empiece por admin, por ejemplo admin@freshtrack.com. 
// Puedes usar cualquier contraseña no vacía.

import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";
import type { ComponentChildren } from "preact";
import { useNavigate } from "react-router-dom";

import {
  getStoredUser,
  setStoredUser,
  removeStoredUser,
} from "../utils/storage";

import type { AppUser } from "../types";

interface UserContextType {
  user: AppUser | null;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({
  children,
}: {
  children: ComponentChildren;
}) {
  const [user, setUser] = useState<AppUser | null>(getStoredUser);
  const navigate = useNavigate();

  const saveUser = (newUser: AppUser) => {
    setStoredUser(newUser);
    setUser(newUser);
  };

  const login = async (email: string, password: string) => {
    if (!email.trim() || !password.trim()) {
      throw new Error("Completa el correo y la contraseña.");
    }

    const normalizedEmail = email.trim().toLowerCase();
    const isAdmin = normalizedEmail.startsWith("admin");

    saveUser({
      name: isAdmin
        ? "Administrador"
        : email.trim().split("@")[0],
      email: email.trim(),
      role: isAdmin ? "admin" : "user",
    });

    navigate(isAdmin ? "/admin" : "/dashboard");
  };

  const register = async (
    name: string,
    email: string,
    password: string
  ) => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      throw new Error("Completa todos los campos.");
    }

    if (!email.includes("@")) {
      throw new Error("Ingresa un correo electrónico válido.");
    }

    saveUser({
      name: name.trim(),
      email: email.trim(),
      role: "user",
    });

    navigate("/dashboard");
  };

  const logout = () => {
    removeStoredUser();
    setUser(null);
    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{ user, login, register, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUser debe utilizarse dentro de UserProvider"
    );
  }

  return context;
}

