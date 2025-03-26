import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import { handleSignOut } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data } = useSession();
  return (
    <div>
      <h1>Hello {data?.user.name}!</h1>
      <Button onClick={handleSignOut}>Log out</Button>
    </div>
  );
}
