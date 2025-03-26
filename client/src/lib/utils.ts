import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { signOut } from "./auth-client";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const getFullURL = (route: string) => {
  return window.location.origin + route;
}

export const handleSignOut = () => {
  signOut().then(() => window.location.reload())
};