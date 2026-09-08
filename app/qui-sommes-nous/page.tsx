import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { ArrowRight, Eye, Heart, ShieldCheck, Target, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description:
    "Notre histoire, notre mission, nos valeurs et nos engagements envers les commerçants et les habitants du Bénin.",
};

const PILIERS = [
  {
    Icon: Target,
    titre: "Notre mission",
    texte:
      "Donner à chaque vendeuse, artisan et PME du Bénin une vitrine digitale gratuite, et à chaque habitant le moyen de trouver un service en quelques secondes.",
  },
  {
    Icon: Eye,
    titre: "Notre vision",
    texte:
      "Un continent où le commerce de proximité n'a plus à choisir entre rester local et devenir visible. Le digital au service du quartier, pas contre lui.",
  },
  {
    Icon: Heart,
    titre: "Nos valeurs",
    texte:
      "Simplicité avant tout, gratuité de l'essentiel, respect des commerçants et fiabilité de l'information. Rien qui complique la vie de nos utilisateurs.",
  },
];

const ENGAGEMENTS = [
  {
    Icon: ShieldCheck,
    titre: "L'essentiel restera gratuit",
    texte:
      "Créer un stand, publier, discuter et recevoir des commandes ne coûtera jamais rien à un commerçant.",
  },
  {
    Icon: Users,
    titre: "Des stands vérifiés",
    texte:
      "Nous vérifions les stands pour garantir un espace digital fiable et organisé, où l'on sait à qui l'on parle.",
  },
  {
    Icon: Heart,
    titre: "Le local d'abord",
    texte:
      "Nos algorithmes privilégient la proximité géographique. Le petit stand du quartier passe avant la grande enseigne lointaine.",
  },
];

const ETAPES = [
  {
    annee: "Le constat",
    titre: "Une question restée sans réponse",
    texte:
      "« Où est-ce que je trouve une couturière ouverte, près d'ici, maintenant ? » Cette question banale n'avait aucune réponse fiable.",
  },
  {
    annee: "L'idée",
    titre: "Recréer le marché, en digital",
    texte:
      "Plutôt que d'inventer un nouveau commerce, nous avons décidé de transposer celui qui existe déjà : des stands, une allée, une conversation.",
  },
  {
    annee: "Aujourd'hui",
    titre: "Des milliers de stands en ligne",
    texte:
      "Axì rassemble aujourd'hui plus de 1200 entreprises et artisans enregistrés, et grandit quartier après quartier.",
  },
  {
    annee: "Demain",
    titre: "Au-delà du Bénin",
    texte:
      "Le même besoin existe partout en Afrique de l'Ouest. Notre feuille de route suit les villes, une à une.",
  },
];

export default function QuiSommesNousPage() {
  return (
    <>
      <PageHeader
        eyebrow="Qui sommes-nous"
        breadcrumb="Qui sommes-nous ?"
        title={
          <>
            Une équipe au service du{" "}
            <span className="text-primary">commerce local</span>
          </>
        }
        description="Axì est né d'un constat simple, vécu au quotidien. Nous construisons l'outil que nous aurions voulu avoir — pour les commerçants comme pour les habitants."
      />

      {/* Notre histoire */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="left">
            <span className="eyebrow text-primary">Notre histoire</span>
            <h2 className="heading-lg mt-4">
              Nous n&apos;avons rien inventé. Nous avons juste branché le marché.
            </h2>
            <div className="mt-6 space-y-4 font-sans leading-relaxed text-gray-700">
              <p>
                Le commerce de proximité fonctionne depuis toujours au Bénin. Ce
                qui manquait, ce n&apos;était pas l&apos;offre : c&apos;était le
                lien entre celui qui cherche et celui qui propose.
              </p>
              <p>
                Nous avons donc construit un espace digital fiable et organisé,
                dédié aux services locaux, où l&apos;on retrouve la logique du
                marché — des stands, des allées, des conversations — sans la
                contrainte du déplacement.
              </p>
              <p className="font-semibold text-black">
                Des individus passionnés, dédiés à l&apos;autonomisation des
                entrepreneurs africains et à la construction de l&apos;avenir du
                commerce.
              </p>
            </div>

            <Link href="/equipe" className="btn-primary group mt-8">
              Rencontrer l&apos;équipe
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </Reveal>

          <Reveal variant="right" delay={120}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 h-full w-full border-2 border-black"
              />
              <Image
                src="/teamImage.png"
                alt="L'équipe Axì"
                width={800}
                height={600}
                className="relative h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Valeurs */}
      <section className="border-y-2 border-black bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <span className="eyebrow text-black/60">Ce qui nous guide</span>
            <h2 className="heading-lg mt-4">Mission, vision et valeurs</h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {PILIERS.map(({ Icon, titre, texte }) => (
                <article key={titre} className="stagger-item card-sharp group h-full">
                  <span className="flex h-14 w-14 items-center justify-center border-2 border-black bg-primary transition-transform duration-300 group-hover:rotate-6">
                    <Icon size={26} aria-hidden />
                  </span>
                  <h3 className="heading-sm mt-6">{titre}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-gray-700">
                    {texte}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Parcours / timeline */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <span className="eyebrow text-primary">Notre parcours</span>
          <h2 className="heading-lg mt-4">Du constat au marché digital</h2>
        </Reveal>

        <Reveal delay={100}>
          <ol className="mt-12 grid gap-px border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4">
            {ETAPES.map((etape) => (
              <li
                key={etape.annee}
                className="stagger-item group bg-white p-6 transition-colors duration-300 hover:bg-primary"
              >
                <span className="eyebrow text-gray-400 transition-colors duration-300 group-hover:text-black/60">
                  {etape.annee}
                </span>
                <h3 className="heading-sm mt-3">{etape.titre}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-black/80">
                  {etape.texte}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Engagements */}
      <section className="border-y-2 border-black bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <span className="eyebrow text-primary">Nos engagements</span>
            <h2 className="heading-lg mt-4 text-white">
              Trois promesses que nous ne renégocions pas
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {ENGAGEMENTS.map(({ Icon, titre, texte }) => (
                <article
                  key={titre}
                  className="stagger-item h-full border-2 border-gray-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary"
                >
                  <Icon size={26} className="text-primary" aria-hidden />
                  <h3 className="heading-sm mt-5 text-white">{titre}</h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-gray-400">
                    {texte}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Envie d'en savoir plus ?"
        description="Découvrez l'équipe derrière Axì, ou écrivez-nous directement — nous répondons à tous les messages."
        primaryLabel="Voir l'équipe"
        primaryHref="/equipe"
        secondaryLabel="Nous écrire"
        secondaryHref="/contact"
      />
    </>
  );
}
