import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Store } from "lucide-react";

const POINTS = [
  { Icon: Store, label: "Stand gratuit" },
  { Icon: MapPin, label: "Classement par proximité" },
  { Icon: MessageCircle, label: "Discussion instantanée" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Carré décoratif */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-20 hidden h-64 w-64 border-2 border-primary/50 lg:block animate-float"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-6 py-12 md:flex-row md:py-16">
        {/* --- TEXTE --- */}
        <div className="flex-1 animate-slide-left">
          <span className="eyebrow inline-flex items-center gap-2 border-2 border-black bg-primary px-3 py-1.5 text-black">
            <span className="h-2 w-2 bg-black animate-pulse-square" aria-hidden />
            Disponible au Bénin
          </span>

          <h1 className="heading-xl mt-6">
            Axì — Le marché digital{" "}
            <span className="relative inline-block">
              <span className="relative z-10">de proximité</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-3 bg-primary animate-draw-bar"
                style={{ animationDelay: "500ms" }}
              />
            </span>
          </h1>

          <p className="mt-6 font-sans font-medium leading-relaxed text-gray-800">
            Retrouvez les vendeuses, PME, artisans et services de proximité autour
            de vous… comme si vous y étiez déjà.
          </p>

          <p className="mt-3 font-sans font-semibold leading-relaxed text-black">
            Commandez, réservez, explorez les stands, tout depuis votre téléphone.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/telecharger" className="btn-primary group">
              Télécharger l&apos;application
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <Link href="/services" className="btn-outline">
              Découvrir les services
            </Link>
          </div>

          {/* Points clés */}
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {POINTS.map(({ Icon, label }, i) => (
              <li
                key={label}
                style={{ animationDelay: `${400 + i * 120}ms` }}
                className="flex animate-fade-in items-center gap-2 font-sans text-sm text-gray-700"
              >
                <Icon size={16} className="text-primary" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* --- IMAGE --- */}
        <div className="flex flex-1 animate-slide-right justify-center">
          <div className="relative w-full">
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 hidden h-full w-full border-2 border-black md:block"
            />
            <Image
              src="/HeroImage.png"
              alt="Écrans de l'application Axì"
              width={800}
              height={800}
              className="relative h-auto w-full max-w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
