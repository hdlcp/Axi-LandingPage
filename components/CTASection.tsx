import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/**
 * Bandeau d'appel à l'action réutilisé en bas des sous-pages.
 */
export default function CTASection({
  title = "Prêt à rejoindre Axì ?",
  description = "Créez votre stand digital gratuitement, ou téléchargez l'application pour découvrir les services autour de vous.",
  primaryLabel = "Télécharger l'application",
  primaryHref = "/telecharger",
  secondaryLabel = "Nous contacter",
  secondaryHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="mt-20 border-y-2 border-black bg-primary">
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="heading-lg text-black">{title}</h2>
              <p className="mt-4 font-sans text-base md:text-lg leading-relaxed text-black/80">
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href={primaryHref} className="btn-dark group">
                {primaryLabel}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link href={secondaryHref} className="btn-outline">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
