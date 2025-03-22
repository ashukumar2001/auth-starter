import SignupForm from "@/components/blocks/signup-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/signup")({
  component: SignupForm,
});
