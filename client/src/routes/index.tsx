import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/blocks/hero";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Hero
      title="Auth Starter Template"
      subtitle="Transform your workflow with intelligent automation. Simple, powerful, reliable."
      actions={[
        {
          label: "Get Started",
          href: "/auth/login",
          variant: "default",
        },
      ]}
      titleClassName="text-5xl md:text-6xl font-extrabold"
      subtitleClassName="text-lg md:text-xl max-w-[600px]"
      actionsClassName="mt-8"
    />
  );
}
