import authClient from "@/lib/auth-client";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: AuthLayoutComponent,
  pendingMs: 50,
  pendingMinMs: 100,
  beforeLoad: async () => {
    const { data } = await authClient.getSession();
    if (!!data?.user) {
      return redirect({ to: "/dashboard" });
    }
  },
});

function AuthLayoutComponent() {
  return (
    <main className="grid place-items-center h-screen">
      <Outlet />
    </main>
  );
}
