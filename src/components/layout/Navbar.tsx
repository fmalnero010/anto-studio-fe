import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { APP_NAME, APP_SUBTITLE } from "@/lib/constants";
import { Button } from "@/components/ui";

const NAV_LINKS = [
  { label: "Servicios", href: "#services" },
  { label: "Proceso", href: "#how-it-works" },
  { label: "Reseñas", href: "#testimonials" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => { setIsOpen(false); };

  return (
    <>
      <header className="sticky top-0 z-50 bg-linen border-b border-divider">
        <nav
          className="flex items-center justify-between px-5 md:px-10 lg:px-16 h-[68px] max-w-6xl mx-auto"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5">
            <span className="text-sm md:text-base font-extralight tracking-[0.4em] text-ink">
              {APP_NAME}
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-rose mt-0.5" />
            <span className="text-[0.5rem] md:text-[0.625rem] font-normal tracking-[0.2em] text-stone">
              {APP_SUBTITLE}
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.625rem] md:text-xs font-medium uppercase tracking-[0.18em] text-ink-secondary hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <Button variant="rose" size="sm" asChild className="hidden md:inline-flex">
              <Link to="/booking">Reservar turno</Link>
            </Button>
            <button
              type="button"
              onClick={() => { setIsOpen((v) => !v); }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="p-1 -mr-1 text-ink md:hidden"
            >
              {isOpen
                ? <X size={20} strokeWidth={1.5} />
                : <Menu size={20} strokeWidth={1.5} />
              }
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-[68px] z-40 bg-linen border-b border-divider md:hidden"
          >
            <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={close}
                  className="text-sm font-light tracking-[0.1em] text-ink-secondary hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="w-full h-px bg-divider" />

              <Button variant="rose" size="md" fullWidth asChild>
                <Link to="/booking" onClick={close}>
                  Reservar turno
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
