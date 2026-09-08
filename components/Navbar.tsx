"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Nos services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Contactez-nous" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Le menu mobile mémorise la page sur laquelle il a été ouvert : dès que
  // l'URL change (clic, retour navigateur), il se referme sans effet de bord.
  const [openedFor, setOpenedFor] = useState<string | null>(null);
  const open = openedFor === pathname;
  const setOpen = (valeur: boolean) => setOpenedFor(valeur ? pathname : null);

  // Ombre portée dès que la page défile.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    // rAF pour ne pas déclencher un setState synchrone dans l'effet.
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Empêche le défilement de l'arrière-plan quand le menu mobile est ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="sticky top-0 z-50 px-4 pt-4 pb-2 md:pb-4">
      <nav
        aria-label="Navigation principale"
        className={`relative mx-auto flex max-w-6xl items-center justify-between border-2 border-black bg-white px-5 py-2 transition-shadow duration-300 ${
          scrolled ? "shadow-[6px_6px_0_0_#000]" : "shadow-none"
        }`}
      >
        {/* Logo */}
        <Link href="/" aria-label="Axì — retour à l'accueil" className="shrink-0">
          <Image
            src="/AxiLogo.png"
            width={50}
            height={50}
            alt="Logo Axì"
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        {/* Menu desktop */}
        <div className="hidden items-center gap-8 text-sm md:flex lg:gap-10">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-active={isActive(link.href)}
              aria-current={isActive(link.href) ? "page" : undefined}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/telecharger"
            className="border-2 border-black bg-primary px-5 py-2 font-sans font-semibold text-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#000]"
          >
            Télécharger
          </Link>
        </div>

        {/* Bouton hamburger (mobile) */}
        <button
          type="button"
          className="flex flex-col items-end justify-center gap-1.5 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span
            className={`block h-[3px] w-7 bg-black transition-all duration-300 ${
              open ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-7 bg-black transition-all duration-300 ${
              open ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-7 bg-black transition-all duration-300 ${
              open ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`mx-auto max-w-6xl overflow-hidden border-black bg-white transition-[max-height,opacity] duration-300 md:hidden ${
          open
            ? "max-h-[80vh] border-x-2 border-b-2 opacity-100"
            : "max-h-0 border-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col divide-y-2 divide-black">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
                className={`flex items-center justify-between px-6 py-4 font-sans font-semibold transition-all duration-300 ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                } ${isActive(link.href) ? "bg-primary text-black" : "text-black hover:bg-gray-50"}`}
              >
                {link.label}
                <span className="h-2 w-2 bg-primary" aria-hidden />
              </Link>
            </li>
          ))}
          <li className="p-4">
            <Link
              href="/telecharger"
              onClick={() => setOpen(false)}
              className="block border-2 border-black bg-black px-5 py-3 text-center font-sans font-semibold text-white"
            >
              Télécharger l&apos;application
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
