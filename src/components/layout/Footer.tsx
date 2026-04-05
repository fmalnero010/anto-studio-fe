import { Link } from "@tanstack/react-router";
import { APP_NAME, APP_SUBTITLE, APP_TAGLINE } from "@/lib/constants";
import { Typography } from "@/components/ui";

const FOOTER_LINKS = [
  { label: "Servicios", href: "#services" },
  { label: "Turnos", href: "/booking" },
  { label: "Contacto", href: "#contact" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#120F0D] px-5 py-5">
      {/* Rose top rule */}
      <div className="w-full h-px bg-rose mb-5" />

      {/* Brand */}
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-sm font-extralight tracking-[0.4em] text-ivory">
          {APP_NAME}
        </span>
        <span className="w-[3px] h-[3px] rounded-full bg-rose" />
        <span className="text-[0.5rem] font-regular tracking-[0.2em] text-stone">
          {APP_SUBTITLE}
        </span>
      </div>
      <Typography
        as="p"
        variant="caption"
        className="text-stone mb-4 tracking-[0.08em]"
      >
        {APP_TAGLINE}
      </Typography>

      {/* Links */}
      <nav aria-label="Footer navigation" className="flex gap-4 mb-4">
        {FOOTER_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="text-[0.5625rem] font-light tracking-[0.08em] text-[#7A706A] hover:text-stone transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Typography as="p" variant="caption" className="text-[#4A4440]">
        © {currentYear} {APP_NAME} {APP_SUBTITLE}
      </Typography>
    </footer>
  );
}
