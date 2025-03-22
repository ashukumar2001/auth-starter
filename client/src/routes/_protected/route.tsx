import authClient from "@/lib/auth-client";
import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  component: RouteComponent,
  pendingComponent: () => <div>Loading...</div>,
  pendingMs: 50,
  pendingMinMs: 100,
  // beforeLoad: async (ctx) => {
  //   const { data, error } = await authClient.getSession();
  //   if (error || !data) {
  //     throw redirect({ to: "/auth/login" });
  //   }
  //   return ctx;
  // },
});

function RouteComponent() {
  const { data } = authClient.useSession();
  if (!data) {
    return <Navigate to="/auth/login" />;
  }
  return <Outlet />;
}
