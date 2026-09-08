import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { ArrowRight, Check, Eye, MapPin, Store, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Axì reconnecte le digital au commerce local : le problème, notre solution et l'impact que nous visons au Bénin.",
};

const PROBLEMES = [
  {
    Icon: Eye,
    titre: "Un manque de visibilité",
    texte:
      "Les vendeuses, artisans et PME n'ont pas les moyens digitaux de se faire connaître au-delà de leur rue.",
  },
  {
    Icon: MapPin,
    titre: "Des services introuvables",
    texte:
      "Les populations peinent à identifier rapidement les services disponibles dans leur propre zone.",
  },
  {
    Icon: Store,
    titre: "Aucun espace dédié",
    texte:
      "Il n'existe pas d'espace digital fiable et organisé, réservé aux services locaux de proximité.",
  },
  {
    Icon: Zap,
    titre: "Pas d'outil simple",
    texte:
      "Aucun moyen direct de commander, réserver ou discuter avec un stand local en quelques clics.",
  },
];

const PILIERS = [
  "Un stand digital créé gratuitement, en quelques minutes",
  "Des stands que l'on parcourt comme si l'on y était",
  "La commande et la réservation directement dans l'application",
  "Une discussion instantanée entre le client et le stand",
  "Un classement par proximité géographique",
];

const CHIFFRES = [
  { valeur: "+1200", label: "entreprises & artisans enregistrés" },
  { valeur: "+350", label: "stands actifs" },
  { valeur: "+5 000", label: "utilisateurs inscrits" },
  { valeur: "87 %", label: "d'utilisateurs satisfaits" },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        breadcrumb="À propos"
        title={
          <>
            Le marché digital <span className="text-primary">de proximité</span>
          </>
        }
        description="Les populations ont souvent du mal à trouver rapidement des services autour d'elles. Les artisans, vendeuses et PME, eux, manquent de visibilité. Axì résout les deux d'un seul geste."
      />

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
            <span className="eyebrow text-primary">Notre point de départ</span>
            <h2 className="heading-lg mt-4">
              Le commerce local existe déjà. Il lui manquait juste une vitrine.
            </h2>
            <div className="mt-6 space-y-4 font-sans leading-relaxed text-gray-700">
              <p>
                Partout au Bénin, des milliers de vendeuses, couturières,
                coiffeuses, restaurateurs et artisans travaillent chaque jour.
                Leur savoir-faire est réel, leur clientèle est locale — mais leur
                visibilité s&apos;arrête au bout de la rue.
              </p>
              <p>
                En face, les habitants cherchent : un plat, une retouche, un
                réparateur, une boutique ouverte à cette heure-ci. Ils demandent
                autour d&apos;eux, au hasard, et perdent du temps.
              </p>
              <p className="font-semibold text-black">
                Axì apporte une solution simple : le marché digital où chacun
                retrouve les services autour de lui, comme s&apos;il y était.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 h-full w-full border-2 border-primary"
              />
              <Image
                src="/Image2.png"
                alt="Aperçu de l'application Axì"
                width={800}
                height={800}
                className="relative h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Le problème */}
      <section className="border-y-2 border-black bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <span className="eyebrow text-black/60">Le problème</span>
            <h2 className="heading-lg mt-4 max-w-3xl">
              Quatre blocages qui freinent l&apos;économie de proximité
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {PROBLEMES.map(({ Icon, titre, texte }, i) => (
                <article key={titre} className="stagger-item card-sharp group">
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black bg-primary transition-transform duration-300 group-hover:rotate-6">
                      <Icon size={22} aria-hidden />
                    </span>
                    <div>
                      <span className="font-sans text-xs font-bold text-gray-400">
                        0{i + 1}
                      </span>
                      <h3 className="heading-sm mt-1">{titre}</h3>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-gray-700">
                        {texte}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* La solution */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left" className="lg:order-2">
            <span className="eyebrow text-primary">Notre solution</span>
            <h2 className="heading-lg mt-4">
              Un stand digital pour chacun, un marché pour tous
            </h2>
            <p className="mt-6 font-sans leading-relaxed text-gray-700">
              Vendeuses, artisans, PME, couturières, restaurants, coiffeuses :
              chacun crée gratuitement son stand digital, publie ses produits et
              annonce ses nouveautés. En face, les utilisateurs parcourent,
              découvrent, réservent et discutent.
            </p>

            <ul className="mt-8 space-y-3">
              {PILIERS.map((pilier) => (
                <li key={pilier} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border-2 border-black bg-primary">
                    <Check size={14} strokeWidth={3} aria-hidden />
                  </span>
                  <span className="font-sans text-gray-800">{pilier}</span>
                </li>
              ))}
            </ul>

            <Link href="/services" className="btn-primary group mt-8">
              Découvrir les fonctionnalités
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </Reveal>

          <Reveal variant="right" delay={120} className="lg:order-1">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -bottom-4 -left-4 h-full w-full border-2 border-black"
              />
              <Image
                src="/Image3.png"
                alt="Parcours d'un stand dans l'application Axì"
                width={800}
                height={800}
                className="relative h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Chiffres */}
      <section className="border-y-2 border-black bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Reveal>
            <h2 className="heading-lg text-white">Axì en quelques chiffres</h2>
            <div className="mt-4 h-1.5 w-24 bg-primary" aria-hidden />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid grid-cols-2 gap-px border-2 border-gray-800 bg-gray-800 lg:grid-cols-4">
              {CHIFFRES.map(({ valeur, label }) => (
                <div
                  key={label}
                  className="stagger-item bg-black p-6 text-center transition-colors duration-300 hover:bg-primary hover:text-black md:p-8"
                >
                  <div className="font-heading text-4xl font-bold md:text-5xl">
                    {valeur}
                  </div>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-gray-400 transition-colors duration-300">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision courte */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <Reveal variant="scale">
          <span className="eyebrow text-primary">Notre conviction</span>
          <blockquote className="heading-md mt-6 leading-snug">
            « Axì reconnecte le digital au commerce local. Chaque stand qui
            gagne en visibilité, c&apos;est une famille qui vit mieux. »
          </blockquote>
          <Link href="/qui-sommes-nous" className="btn-outline group mt-10">
            Qui sommes-nous ?
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
