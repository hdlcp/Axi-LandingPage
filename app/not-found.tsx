import Link from "next/link";
import { ArrowRight, Home, HelpCircle, Store, Download } from "lucide-react";

const SUGGESTIONS = [
  {
    href: "/services",
    label: "Nos services",
    description: "Tout ce qu'Axì permet de faire",
    Icon: Store,
  },
  {
    href: "/telecharger",
    label: "Télécharger",
    description: "Installer l'application",
    Icon: Download,
  },
  {
    href: "/aide",
    label: "Centre d'aide",
    description: "Les réponses aux questions fréquentes",
    Icon: HelpCircle,
  },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-50" />

      {/* Carrés décoratifs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-6 top-16 hidden h-24 w-24 border-2 border-primary/40 lg:block animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-16 right-10 hidden h-12 w-12 bg-primary lg:block animate-pulse-square"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Bloc 404 */}
          <div className="animate-slide-left">
            <span className="eyebrow text-primary">Erreur 404</span>

            <div className="relative mt-6 inline-block">
              <span
                aria-hidden
                className="absolute inset-0 select-none font-heading text-[6rem] font-black leading-none text-primary sm:text-[9rem] md:text-[11rem]"
                style={{ transform: "translate(10px, 10px)" }}
              >
                404
              </span>
              <span className="relative select-none font-heading text-[6rem] font-black leading-none text-black sm:text-[9rem] md:text-[11rem]">
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "2px #fff" }}
                >
                  404
                </span>
              </span>
            </div>
          </div>

          {/* Message + actions */}
          <div className="animate-slide-right" style={{ animationDelay: "150ms" }}>
            <h1 className="heading-lg text-white">
              Ce stand a été déplacé… ou n&apos;a jamais existé.
            </h1>

            <div className="mt-6 h-1.5 w-24 bg-primary animate-draw-bar" aria-hidden />

            <p className="mt-6 max-w-xl font-sans leading-relaxed text-gray-300">
              La page que vous cherchez est introuvable. Elle a peut-être changé
              d&apos;adresse, ou le lien comporte une erreur. Pas d&apos;inquiétude :
              le marché est toujours ouvert.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/" className="btn-primary group">
                <Home size={18} aria-hidden />
                Retour à l&apos;accueil
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white bg-transparent px-6 py-3 font-sans font-semibold text-white transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-[6px_6px_0_0_#FFBE00]"
              >
                Signaler le problème
              </Link>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="mt-20 border-t-2 border-gray-800 pt-10">
          <p className="eyebrow text-gray-500">Ou continuez par ici</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SUGGESTIONS.map(({ href, label, description, Icon }, i) => (
              <Link
                key={href}
                href={href}
                style={{ animationDelay: `${200 + i * 120}ms` }}
                className="group animate-fade-in border-2 border-gray-800 bg-black/40 p-6 transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:border-primary hover:shadow-[6px_6px_0_0_#FFBE00]"
              >
                <Icon
                  size={26}
                  className="text-primary transition-transform duration-300 group-hover:scale-110"
                  aria-hidden
                />
                <h2 className="mt-4 font-sans font-semibold text-white">{label}</h2>
                <p className="mt-1 font-sans text-sm text-gray-400">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
