import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

type PageHeaderProps = {
  /** Petit sur-titre en majuscules, au-dessus du titre. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Libellé de la page courante dans le fil d'Ariane. */
  breadcrumb?: string;
};

/**
 * En-tête commun à toutes les sous-pages : bandeau noir, angles droits,
 * barre jaune animée. Assure le rythme graphique d'une page à l'autre.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-black text-white">
      {/* Trame discrète */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-60" />

      {/* Blocs jaunes décoratifs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 hidden h-48 w-48 border-2 border-primary/40 md:block animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-24 bottom-0 hidden h-16 w-16 bg-primary md:block animate-pulse-square"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        {breadcrumb && (
          <nav
            aria-label="Fil d'Ariane"
            className="mb-6 flex items-center gap-2 text-xs font-sans text-gray-400 animate-fade-in"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <ChevronRight size={14} aria-hidden />
            <span className="text-primary">{breadcrumb}</span>
          </nav>
        )}

        {eyebrow && (
          <span className="eyebrow text-primary animate-fade-in">{eyebrow}</span>
        )}

        <h1 className="heading-xl mt-4 max-w-4xl text-white animate-slide-left">
          {title}
        </h1>

        <div
          className="mt-6 h-1.5 w-24 bg-primary animate-draw-bar"
          style={{ animationDelay: "250ms" }}
          aria-hidden
        />

        {description && (
          <p
            className="mt-6 max-w-2xl font-sans text-base md:text-lg leading-relaxed text-gray-300 animate-fade-in"
            style={{ animationDelay: "350ms" }}
          >
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
