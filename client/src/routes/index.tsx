import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="size-full flex flex-col min-h-screen justify-center items-center gap-3">
      <h1 className="text-center text-4xl font-bold">Macro Tracker</h1>
      <Button asChild>
        <Link to="/login">Get Started</Link>
      </Button>
    </section>
  );
}
