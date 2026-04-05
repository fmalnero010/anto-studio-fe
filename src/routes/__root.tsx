import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Outlet />
    </div>
  );
}
