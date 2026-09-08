import Image from "next/image";
import Link from "next/link";
import Hero from "./(home)/Hero";
import Faq from "./(home)/Faq";
import Reveal from "@/components/Reveal";
import VideoPreview from "@/components/VideoPreview";
import { ArrowRight } from "lucide-react";

/** Encadré carré réutilisé dans les sections de présentation. */
const InfoRow = ({ label }: { label: string }) => (
  <div className="border-2 border-black bg-white p-4 transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:bg-primary hover:shadow-[5px_5px_0_0_#000]">
    <p className="font-sans font-semibold text-black">{label}</p>
  </div>
);

const STATS = [
  { valeur: "+1200", label: "entreprises &\nartisans\nenregistrés" },
  { valeur: "+350", label: "stands actifs" },
  { valeur: "+5 000", label: "utilisateurs\ninscrits" },
  { valeur: "87 %", label: "d'utilisateurs\nsatisfaits" },
];

const RAISONS = [
  "Connecte instantanément les besoins aux services",
  "Donne une visibilité réelle aux artisans",
  "Favorise l'économie locale",
  "Simplifie la vie des populations",
];

export default function Home() {
  return (
    <div>
      <Hero />

      {/* --- Les stands --- */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-6 py-12 md:flex-row md:py-16">
        <Reveal variant="left" className="flex-1">
          <Image
            src="/Image2.png"
            alt="Écrans de gestion d'un stand Axì"
            width={800}
            height={800}
            className="h-auto w-full max-w-full"
            priority
          />
        </Reveal>

        <Reveal variant="right" delay={100} className="flex-1">
          <h2 className="heading-lg mb-4">
            Leur stand. Leur vitrine. Leur visibilité.
          </h2>

          <p className="mb-4 font-sans font-medium leading-relaxed text-black">
            Sur Axì, les entreprises, PME, vendeuses et artisans créent
            gratuitement leur stand digital.
          </p>

          <p className="mb-8 font-sans font-medium leading-relaxed text-black">
            Ils publient, présentent leurs produits, annoncent leurs nouveautés et
            touchent davantage de clients — partout au Bénin.
          </p>

          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <InfoRow label="Création de stand gratuite" />
            <InfoRow label="Publications illimitées" />
            <InfoRow label="Gestion simple et rapide" />
            <InfoRow label="Visibilité locale renforcée" />
          </div>
        </Reveal>
      </section>

      {/* --- La recherche --- */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-6 py-12 md:flex-row md:py-16">
        <Reveal variant="left" className="flex-1">
          <Image
            src="/Image3.png"
            alt="Recherche de services de proximité dans Axì"
            width={800}
            height={800}
            className="h-auto w-full max-w-full"
          />
        </Reveal>

        <Reveal variant="right" delay={100} className="flex-1">
          <h2 className="heading-lg mb-4">
            Trouvez ce dont vous avez besoin, où que vous soyez.
          </h2>

          <p className="mb-4 font-sans font-medium leading-relaxed text-black">
            Que vous soyez nouveau dans une ville ou à la recherche d&apos;un
            service précis, Axì vous aide à tout retrouver : restaurants,
            artisans, boutiques, services de proximité et bien plus encore.
          </p>

          <p className="mb-8 font-sans font-medium leading-relaxed text-black">
            Parcourez les stands comme si vous étiez sur place, contactez le
            vendeur et passez votre commande en quelques clics.
          </p>

          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <InfoRow label="Recherche rapide et intelligente" />
            <InfoRow label="Discussion avec le stand" />
            <InfoRow label="Commandes et réservations en ligne" />
            <InfoRow label="Expérience simple et intuitive" />
          </div>
        </Reveal>
      </section>

      {/* --- Chiffres --- */}
      <section className="w-full bg-white px-6 py-12 md:py-16">
        <Reveal variant="fade" className="mx-auto mb-12 flex w-full max-w-6xl justify-center">
          <Image
            src="/barre.png"
            alt=""
            width={1200}
            height={200}
            className="h-auto w-full object-contain"
          />
        </Reveal>

        <Reveal>
          <h2 className="heading-lg mb-12 text-center text-black">
            Axì en quelques chiffres
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.valeur}
                className="stagger-item group flex flex-col items-center bg-white p-8 text-center transition-colors duration-300 hover:bg-primary"
              >
                <div className="font-heading text-5xl font-bold text-black">
                  {stat.valeur}
                </div>
                <p className="mt-4 whitespace-pre-line font-sans text-lg font-medium leading-relaxed text-black">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* --- Téléchargement --- */}
      <section id="download" className="relative w-full py-8 md:py-16">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-1/2 -z-10 h-full -translate-y-1/2 border-y-2 border-black bg-primary md:h-3/5"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row md:gap-12 md:px-8">
          <Reveal variant="left" className="flex w-full flex-1 justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-sm md:max-w-md">
              <Image
                src="/AxiPhone.png"
                alt="L'application Axì sur mobile"
                width={800}
                height={800}
                className="h-auto w-full animate-float object-contain"
              />
            </div>
          </Reveal>

          <Reveal
            variant="right"
            delay={100}
            className="flex flex-1 flex-col items-center text-center md:items-start md:text-left"
          >
            <h2 className="heading-lg mb-4 text-black">Axì, toujours avec vous.</h2>

            <p className="mb-6 max-w-lg font-sans text-base leading-relaxed text-black md:mb-8 md:text-lg">
              Téléchargez l&apos;application et découvrez un nouveau mode
              d&apos;accès aux services de proximité au Bénin.
            </p>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Link
                href="/telecharger"
                className="flex items-center justify-center gap-3 border-2 border-black bg-black px-4 py-3 text-white transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] sm:justify-start md:px-6"
              >
                <Image
                  src="/playstore.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-8 w-8 shrink-0 md:h-10 md:w-10"
                />
                <span className="text-left">
                  <span className="block text-xs uppercase tracking-wide opacity-90">
                    Disponible sur
                  </span>
                  <span className="-mt-1 block text-xl font-semibold md:text-2xl">
                    Google Play
                  </span>
                </span>
              </Link>

              <Link
                href="/telecharger"
                className="flex items-center justify-center gap-3 border-2 border-black bg-black px-4 py-3 text-white transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] sm:justify-start md:px-6"
              >
                <Image
                  src="/logo-apple.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-8 w-8 shrink-0 md:h-10 md:w-10"
                />
                <span className="text-left">
                  <span className="block text-xs uppercase tracking-wide opacity-90">
                    Télécharger dans
                  </span>
                  <span className="-mt-1 block text-xl font-semibold md:text-2xl">
                    l&apos;App Store
                  </span>
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --- Pourquoi Axì --- */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-6 py-12 md:flex-row md:py-16">
        <Reveal variant="left" className="flex-1">
          <h2 className="heading-lg mb-8 text-black">
            Pourquoi <span className="text-primary">Axì</span> ?
          </h2>

          <ul className="space-y-4 font-sans text-lg font-medium text-black">
            {RAISONS.map((raison) => (
              <li key={raison} className="group flex items-start gap-4">
                <span
                  className="mt-2 h-3 w-3 shrink-0 bg-primary transition-transform duration-300 group-hover:scale-150"
                  aria-hidden
                />
                <span>{raison}</span>
              </li>
            ))}
          </ul>

          <Link href="/a-propos" className="btn-primary group mt-8">
            En savoir plus sur Axì
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </Reveal>

        <Reveal variant="right" delay={100} className="flex flex-1 justify-center">
          <Image
            src="/Mockup-phone.png"
            alt="Écrans de l'application Axì"
            width={800}
            height={800}
            className="h-auto w-full max-w-full"
          />
        </Reveal>
      </section>

      {/* --- Vidéo --- */}
      <section className="px-6">
        <Reveal variant="scale">
          <VideoPreview />
        </Reveal>
      </section>

      {/* --- FAQ --- */}
      <section className="mx-auto mt-20 max-w-6xl px-6">
        <Reveal>
          <h2 className="heading-lg mb-12 text-black">FAQ</h2>
        </Reveal>

        <Reveal delay={100}>
          <Faq />
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-8 font-sans text-sm text-gray-600">
            D&apos;autres questions ?{" "}
            <Link
              href="/aide"
              className="font-semibold text-black underline decoration-primary decoration-4 underline-offset-4 transition-colors hover:text-primary"
            >
              Consultez le centre d&apos;aide
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* --- Équipe --- */}
      <section className="mx-auto mt-16 max-w-6xl px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="heading-lg mb-4 text-black">Une équipe proche de vous</h2>
            <p className="mx-auto max-w-3xl font-sans text-lg leading-relaxed text-black">
              Des individus passionnés dédiés à l&apos;autonomisation des
              entrepreneurs africains et à la construction de l&apos;avenir du
              commerce.
            </p>
          </div>
        </Reveal>

        <Reveal variant="scale" delay={100}>
          <div className="mx-auto max-w-xl">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 h-full w-full border-2 border-primary"
              />
              <Image
                src="/teamImage.png"
                alt="L'équipe Axì"
                width={1000}
                height={700}
                className="relative h-auto w-full border-2 border-black object-contain"
              />
            </div>

            <div className="mt-8 text-center">
              <Link href="/equipe" className="btn-outline group">
                Rencontrer l&apos;équipe
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
