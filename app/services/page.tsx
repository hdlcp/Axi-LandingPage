import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import {
  ArrowRight,
  Infinity as InfinityIcon,
  MapPin,
  MessageCircle,
  Rss,
  ShoppingCart,
  Sparkles,
  Store,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Stand digital gratuit, publications illimitées, fil d'actualité, commandes et réservations, discussion instantanée et classement par proximité.",
};

const FONCTIONNALITES = [
  {
    Icon: Store,
    titre: "Création de stand 100 % gratuite",
    texte:
      "Vendeuses, artisans, PME, couturières, restaurants, coiffeuses : chacun ouvre son stand digital en quelques minutes, sans frais et sans engagement.",
  },
  {
    Icon: InfinityIcon,
    titre: "Publications illimitées",
    texte:
      "Publiez autant de produits, de photos et de nouveautés que vous le souhaitez. Aucun quota, aucune limite cachée.",
  },
  {
    Icon: Rss,
    titre: "Fil d'actualité en défilement",
    texte:
      "Un fil vivant où les stands de votre zone publient leurs offres du jour. On y découvre par hasard, exactement comme au marché.",
  },
  {
    Icon: ShoppingCart,
    titre: "Commandes et réservations en ligne",
    texte:
      "Le client choisit, commande ou réserve directement depuis l'application. Le stand reçoit la demande instantanément.",
  },
  {
    Icon: MessageCircle,
    titre: "Discussion instantanée",
    texte:
      "Une messagerie directe entre le client et le stand : préciser une taille, négocier, confirmer une heure de retrait.",
  },
  {
    Icon: MapPin,
    titre: "Classement par proximité",
    texte:
      "Les résultats s'organisent selon votre position. Ce qui est le plus proche remonte en premier, naturellement.",
  },
  {
    Icon: Sparkles,
    titre: "Visibilité renforcée",
    texte:
      "Chaque stand gagne une présence durable : une page publique, un référencement local et une audience qui grandit.",
  },
];

const METIERS = [
  "Restaurants",
  "Couturières",
  "Coiffeuses",
  "Artisans",
  "Boutiques",
  "Menuisiers",
  "Pâtissières",
  "Mécaniciens",
  "Cordonniers",
  "Épiceries",
  "Photographes",
  "Plombiers",
  "PME",
  "Vendeuses",
];

const PARCOURS_VENDEUR = [
  {
    titre: "Créez votre stand",
    texte:
      "Nom, activité, zone, photos. Votre vitrine est en ligne en quelques minutes, gratuitement.",
  },
  {
    titre: "Publiez vos produits",
    texte:
      "Ajoutez vos articles, vos prix et vos nouveautés. Vos publications apparaissent dans le fil local.",
  },
  {
    titre: "Recevez vos clients",
    texte:
      "Commandes, réservations et messages arrivent directement dans votre stand.",
  },
];

const PARCOURS_CLIENT = [
  {
    titre: "Explorez autour de vous",
    texte:
      "Le fil d'actualité et la recherche vous montrent les stands les plus proches.",
  },
  {
    titre: "Entrez dans le stand",
    texte:
      "Parcourez les produits et les photos comme si vous étiez devant l'étal.",
  },
  {
    titre: "Commandez ou discutez",
    texte:
      "Réservez, commandez, ou écrivez directement au vendeur pour tout préciser.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos services"
        breadcrumb="Nos services"
        title={
          <>
            Tout ce qu&apos;Axì met{" "}
            <span className="text-primary">entre vos mains</span>
          </>
        }
        description="Une application pensée pour deux besoins qui se répondent : donner de la visibilité aux stands locaux, et permettre à chacun de trouver un service à côté de chez lui."
      />

      {/* Bandeau défilant des métiers */}
      <div className="marquee border-b-2 border-black bg-primary py-4">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {METIERS.map((metier) => (
                <span
                  key={`${copy}-${metier}`}
                  className="flex items-center gap-6 whitespace-nowrap px-6 font-sans text-sm font-semibold uppercase tracking-widest text-black"
                >
                  {metier}
                  <span className="h-2 w-2 bg-black" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Fonctionnalités */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <span className="eyebrow text-primary">Fonctionnalités</span>
          <h2 className="heading-lg mt-4 max-w-3xl">
            Sept fonctionnalités, un seul objectif : rapprocher l&apos;offre et la
            demande
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FONCTIONNALITES.map(({ Icon, titre, texte }, i) => (
              <article key={titre} className="stagger-item card-sharp group flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center border-2 border-black bg-primary transition-transform duration-300 group-hover:-rotate-6">
                    <Icon size={22} aria-hidden />
                  </span>
                  <span className="font-heading text-3xl font-bold text-gray-200 transition-colors duration-300 group-hover:text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="heading-sm mt-5">{titre}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-gray-700">
                  {texte}
                </p>
              </article>
            ))}

            {/* Carte finale : lien */}
            <Link
              href="/telecharger"
              className="stagger-item group flex flex-col justify-between border-2 border-black bg-black p-6 text-white transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#FFBE00]"
            >
              <h3 className="heading-sm text-white">
                Et tout ça, dans votre poche.
              </h3>
              <span className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary">
                Télécharger Axì
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Comment ça marche */}
      <section className="border-y-2 border-black bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <span className="eyebrow text-black/60">Comment ça marche</span>
            <h2 className="heading-lg mt-4">Deux parcours, une même application</h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {[
              { titre: "Vous tenez un stand", etapes: PARCOURS_VENDEUR, ton: "primary" },
              { titre: "Vous cherchez un service", etapes: PARCOURS_CLIENT, ton: "dark" },
            ].map((bloc, blocIndex) => (
              <Reveal
                key={bloc.titre}
                variant={blocIndex === 0 ? "left" : "right"}
                delay={blocIndex * 120}
              >
                <div
                  className={`h-full border-2 border-black p-8 ${
                    bloc.ton === "primary" ? "bg-primary" : "bg-black text-white"
                  }`}
                >
                  <h3
                    className={`heading-sm ${
                      bloc.ton === "primary" ? "text-black" : "text-white"
                    }`}
                  >
                    {bloc.titre}
                  </h3>

                  <ol className="mt-8 space-y-6">
                    {bloc.etapes.map((etape, i) => (
                      <li key={etape.titre} className="flex gap-5">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center border-2 font-heading text-lg font-bold ${
                            bloc.ton === "primary"
                              ? "border-black bg-white text-black"
                              : "border-primary bg-primary text-black"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <div>
                          <h4
                            className={`font-sans font-semibold ${
                              bloc.ton === "primary" ? "text-black" : "text-white"
                            }`}
                          >
                            {etape.titre}
                          </h4>
                          <p
                            className={`mt-1 font-sans text-sm leading-relaxed ${
                              bloc.ton === "primary" ? "text-black/75" : "text-gray-400"
                            }`}
                          >
                            {etape.texte}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu visuel */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
            <span className="eyebrow text-primary">L&apos;expérience</span>
            <h2 className="heading-lg mt-4">
              Parcourez les stands comme si vous y étiez
            </h2>
            <p className="mt-6 font-sans leading-relaxed text-gray-700">
              Photos, produits, horaires, avis, localisation : chaque stand est une
              véritable vitrine. On entre, on regarde, on demande — sans se
              déplacer, et sans perdre la relation directe qui fait le commerce
              local.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/telecharger" className="btn-primary group">
                Essayer l&apos;application
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link href="/tarifs" className="btn-outline">
                Voir les tarifs
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 h-full w-full border-2 border-primary"
              />
              <Image
                src="/Mockup-phone.png"
                alt="Écrans de l'application Axì"
                width={800}
                height={800}
                className="relative h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ouvrez votre stand aujourd'hui"
        description="La création est gratuite, les publications illimitées, et votre première commande peut arriver dès demain."
        primaryLabel="Créer mon stand"
        primaryHref="/telecharger"
        secondaryLabel="Poser une question"
        secondaryHref="/contact"
      />
    </>
  );
}
