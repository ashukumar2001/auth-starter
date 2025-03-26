import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center">
      <Outlet />
    </main>
  );
}
