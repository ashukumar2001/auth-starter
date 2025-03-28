import { getSession } from "@/lib/auth-client";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_protected")({
  component: RouteComponent,
  pendingComponent: () => <div>Loading...</div>,
  beforeLoad: async () => {
    const { data } = await getSession();
    if (!data) {
      return redirect({ to: "/login" });
    }
  },
  pendingMs: 50,
  pendingMinMs: 100,
});

function RouteComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
