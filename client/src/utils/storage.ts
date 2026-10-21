
import type { AppUser } from "../types";

const AUTH_KEY = "freshtrack_auth";

export function getStoredUser(): AppUser | null {
  try {
    const storedUser = localStorage.getItem(AUTH_KEY);

    if (!storedUser) {
      return null;
    }

    const parsedUser = JSON.parse(storedUser) as AppUser;

    if (
      !parsedUser ||
      typeof parsedUser.name !== "string" ||
      typeof parsedUser.email !== "string" ||
      (parsedUser.role !== "user" && parsedUser.role !== "admin")
    ) {
      localStorage.removeItem(AUTH_KEY);
      return null;
    }

    return parsedUser;
  } catch {
    localStorage.removeItem(AUTH_KEY);
    return null;
  }
}

export function setStoredUser(user: AppUser): void {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

export function removeStoredUser(): void {
  localStorage.removeItem(AUTH_KEY);
}
