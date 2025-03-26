import { getSession } from "@/lib/auth-client";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_auth")({
  component: RouteComponent,
  pendingMs: 50,
  pendingMinMs: 100,
  beforeLoad: async () => {
    const { data } = await getSession();
    if (!!data?.user) {
      return redirect({ to: "/dashboard" });
    }
  },
});

function RouteComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
