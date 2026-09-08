import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { ArrowRight, Bell, Check, Smartphone, Wifi, Store } from "lucide-react";

export const metadata: Metadata = {
  title: "Télécharger l'application",
  description:
    "Téléchargez Axì sur Android et iOS et découvrez un nouveau mode d'accès aux services de proximité au Bénin.",
};

const ETAPES = [
  {
    titre: "Installez l'application",
    texte:
      "Disponible sur Google Play et l'App Store. Le téléchargement est gratuit.",
  },
  {
    titre: "Autorisez la localisation",
    texte:
      "C'est ce qui permet à Axì de classer les stands par proximité et de vous montrer ce qui est réellement à côté.",
  },
  {
    titre: "Explorez ou ouvrez un stand",
    texte:
      "Parcourez le fil d'actualité local, ou créez gratuitement votre propre stand en quelques minutes.",
  },
];

const CONFIG = [
  { Icon: Smartphone, label: "Android 8.0 et plus" },
  { Icon: Smartphone, label: "iOS 14 et plus" },
  { Icon: Wifi, label: "Fonctionne en connexion légère" },
  { Icon: Store, label: "Environ 40 Mo à l'installation" },
];

const AVANTAGES = [
  "Création de stand 100 % gratuite",
  "Publications illimitées",
  "Commandes et réservations en ligne",
  "Discussion instantanée avec les stands",
  "Classement par proximité géographique",
];

export default function TelechargerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Télécharger"
        breadcrumb="Télécharger"
        title={
          <>
            Axì, <span className="text-primary">toujours avec vous</span>
          </>
        }
        description="Téléchargez l'application et découvrez un nouveau mode d'accès aux services de proximité au Bénin."
      />

      {/* Bloc principal */}
      <section className="border-b-2 border-black bg-primary">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal variant="left">
              <div className="relative mx-auto max-w-sm">
                <Image
                  src="/AxiPhone.png"
                  alt="L'application Axì sur mobile"
                  width={800}
                  height={800}
                  className="h-auto w-full animate-float"
                  priority
                />
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <h2 className="heading-lg text-black">
                Le marché de votre quartier, dans votre poche
              </h2>
              <p className="mt-4 font-sans leading-relaxed text-black/80">
                Une seule application pour découvrir les stands autour de vous,
                commander, réserver et discuter directement avec les vendeurs.
              </p>

              {/* Boutons stores */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="group flex items-center justify-center gap-3 border-2 border-black bg-black px-5 py-3 text-white transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] sm:justify-start"
                >
                  <Image
                    src="/playstore.png"
                    alt=""
                    width={40}
                    height={40}
                    className="h-9 w-9 shrink-0"
                  />
                  <span className="text-left">
                    <span className="block text-xs uppercase tracking-wide opacity-90">
                      Disponible sur
                    </span>
                    <span className="block -mt-0.5 text-xl font-semibold">
                      Google Play
                    </span>
                  </span>
                </a>

                <a
                  href="#"
                  className="group flex items-center justify-center gap-3 border-2 border-black bg-black px-5 py-3 text-white transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] sm:justify-start"
                >
                  <Image
                    src="/logo-apple.png"
                    alt=""
                    width={40}
                    height={40}
                    className="h-9 w-9 shrink-0"
                  />
                  <span className="text-left">
                    <span className="block text-xs uppercase tracking-wide opacity-90">
                      Télécharger dans
                    </span>
                    <span className="block -mt-0.5 text-xl font-semibold">
                      l&apos;App Store
                    </span>
                  </span>
                </a>
              </div>

              <p className="mt-5 flex items-start gap-2 border-l-4 border-black pl-4 font-sans text-sm text-black/70">
                <Bell size={16} className="mt-0.5 shrink-0" aria-hidden />
                Les liens de téléchargement seront activés dès la publication sur
                les stores. Écrivez-nous pour être prévenu en premier.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Étapes */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <span className="eyebrow text-primary">Premiers pas</span>
          <h2 className="heading-lg mt-4">Trois étapes, et vous y êtes</h2>
        </Reveal>

        <Reveal delay={100}>
          <ol className="mt-12 grid gap-px border-2 border-black bg-black md:grid-cols-3">
            {ETAPES.map((etape, i) => (
              <li
                key={etape.titre}
                className="stagger-item group bg-white p-8 transition-colors duration-300 hover:bg-primary"
              >
                <span className="flex h-12 w-12 items-center justify-center border-2 border-black bg-primary font-heading text-xl font-bold transition-colors duration-300 group-hover:bg-black group-hover:text-primary">
                  {i + 1}
                </span>
                <h3 className="heading-sm mt-5">{etape.titre}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-black/80">
                  {etape.texte}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Avantages + configuration */}
      <section className="border-y-2 border-black bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal variant="left">
              <span className="eyebrow text-black/60">Ce que vous obtenez</span>
              <h2 className="heading-lg mt-4">Gratuit, et sans mauvaise surprise</h2>

              <ul className="mt-8 space-y-3">
                {AVANTAGES.map((avantage) => (
                  <li key={avantage} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border-2 border-black bg-primary">
                      <Check size={14} strokeWidth={3} aria-hidden />
                    </span>
                    <span className="font-sans text-gray-800">{avantage}</span>
                  </li>
                ))}
              </ul>

              <Link href="/tarifs" className="btn-outline group mt-8">
                Voir le détail des tarifs
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="card-flat h-full">
                <h3 className="heading-sm">Configuration requise</h3>
                <ul className="mt-6 divide-y-2 divide-gray-100">
                  {CONFIG.map(({ Icon, label }) => (
                    <li key={label} className="flex items-center gap-4 py-4">
                      <Icon size={20} className="shrink-0 text-primary" aria-hidden />
                      <span className="font-sans text-sm text-gray-800">{label}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-2 border-black bg-primary p-5">
                  <p className="font-sans text-sm font-semibold text-black">
                    Pas encore d&apos;application installée ?
                  </p>
                  <p className="mt-2 font-sans text-sm text-black/75">
                    Vous pouvez déjà nous écrire pour réserver le nom de votre
                    stand et être accompagné à l&apos;ouverture.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 border-2 border-black bg-black px-4 py-2 font-sans text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Réserver mon stand
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
