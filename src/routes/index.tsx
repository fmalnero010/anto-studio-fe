import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LandingPage } from "@/features/landing";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  );
}
