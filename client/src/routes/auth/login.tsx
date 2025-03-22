import LoginForm from "@/components/blocks/login-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/login")({
  component: LoginForm,
});
