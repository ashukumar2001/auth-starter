import { Button } from "@/components/ui/button";
import authClient from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1 className="text-2xl">Fuckin protected</h1>
      <Button onClick={() => authClient.signOut()}>Sign out</Button>
    </div>
  );
}
