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
    <footer className="bg-[#120F0D] py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-16">
        {/* Rose top rule */}
        <div className="w-full h-px bg-rose mb-6 md:mb-8" />

        <div className="md:flex md:items-start md:justify-between md:gap-12">
          {/* Brand */}
          <div className="mb-5 md:mb-0">
            <div className="flex items-center gap-1.5 mb-1.5">
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
              className="text-stone tracking-[0.08em]"
            >
              {APP_TAGLINE}
            </Typography>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex gap-6 mb-5 md:mb-0 md:items-center">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.5625rem] font-light tracking-[0.08em] text-[#7A706A] hover:text-stone transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <Typography as="p" variant="caption" className="text-[#4A4440] md:text-right md:flex-shrink-0">
            © {currentYear} {APP_NAME} {APP_SUBTITLE}
          </Typography>
        </div>
      </div>
    </footer>
  );
}
