import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { ArrowRight, Mail, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Équipe",
  description:
    "Des individus passionnés dédiés à l'autonomisation des entrepreneurs africains et à la construction de l'avenir du commerce.",
};

/**
 * TODO : remplacer par les vrais membres (nom, photo dans /public, lien).
 * En attendant, les cartes affichent un visuel de remplacement.
 */
const MEMBRES = [
  { role: "Fondateur & CEO", equipe: "Direction" },
  { role: "Co-fondateur & CTO", equipe: "Technique" },
  { role: "Responsable produit", equipe: "Produit" },
  { role: "Lead développeur mobile", equipe: "Technique" },
  { role: "Designer UI / UX", equipe: "Produit" },
  { role: "Responsable partenariats", equipe: "Croissance" },
  { role: "Community manager", equipe: "Croissance" },
  { role: "Support & relation commerçants", equipe: "Opérations" },
];

const VALEURS_EQUIPE = [
  {
    titre: "Proches du terrain",
    texte:
      "Nous passons du temps dans les marchés et les ateliers. Chaque fonctionnalité vient d'un besoin entendu, pas d'une réunion.",
  },
  {
    titre: "Petite équipe, grandes décisions",
    texte:
      "Peu de niveaux, beaucoup d'autonomie. Ce qui est décidé le matin peut être en ligne le soir.",
  },
  {
    titre: "Au service des commerçants",
    texte:
      "Notre réussite se mesure à la leur : plus de visibilité, plus de commandes, plus de revenus.",
  },
];

/** Visuel de remplacement en attendant les photos définitives. */
function AvatarPlaceholder({ index }: { index: number }) {
  const sombre = index % 2 === 0;

  return (
    <div
      className={`relative flex aspect-square w-full items-center justify-center overflow-hidden border-b-2 border-black ${
        sombre ? "bg-black" : "bg-primary"
      }`}
    >
      {/* Trame diagonale */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${
            sombre ? "#FFBE00" : "#000"
          } 0px, ${sombre ? "#FFBE00" : "#000"} 2px, transparent 2px, transparent 12px)`,
        }}
      />

      <div
        className={`relative flex h-20 w-20 items-center justify-center border-2 ${
          sombre ? "border-primary bg-black text-primary" : "border-black bg-white text-black"
        } transition-transform duration-500 group-hover:scale-110`}
      >
        <User size={38} strokeWidth={1.5} aria-hidden />
      </div>

      <span className="absolute bottom-2 right-2 border border-black/20 bg-white/85 px-2 py-0.5 font-sans text-[10px] uppercase tracking-widest text-black">
        Photo à venir
      </span>
    </div>
  );
}

export default function EquipePage() {
  return (
    <>
      <PageHeader
        eyebrow="L'équipe"
        breadcrumb="Équipe"
        title={
          <>
            Une équipe <span className="text-primary">proche de vous</span>
          </>
        }
        description="Des individus passionnés dédiés à l'autonomisation des entrepreneurs africains et à la construction de l'avenir du commerce."
      />

      {/* Photo d'équipe */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal variant="scale">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 h-full w-full border-2 border-primary"
            />
            <Image
              src="/teamImage.png"
              alt="L'équipe Axì réunie"
              width={1200}
              height={800}
              className="relative h-auto w-full border-2 border-black object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Membres */}
      <section className="border-y-2 border-black bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow text-black/60">Les visages d&apos;Axì</span>
                <h2 className="heading-lg mt-4">Qui fait tourner le marché</h2>
              </div>
              <p className="max-w-sm border-l-4 border-primary pl-4 font-sans text-sm text-gray-600">
                Les noms et photos définitifs seront publiés prochainement. Les
                rôles ci-dessous sont bien ceux de l&apos;équipe actuelle.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MEMBRES.map((membre, i) => (
                <article
                  key={membre.role}
                  className="stagger-item group border-2 border-black bg-white transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000]"
                >
                  <AvatarPlaceholder index={i} />

                  <div className="p-5">
                    <span className="eyebrow text-gray-400">{membre.equipe}</span>
                    <h3 className="mt-2 font-heading text-lg font-bold leading-snug">
                      {membre.role}
                    </h3>
                    <p className="mt-2 font-sans text-sm text-gray-500">
                      Nom à venir
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Culture */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <span className="eyebrow text-primary">Notre façon de travailler</span>
          <h2 className="heading-lg mt-4">Trois principes, tenus au quotidien</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-px border-2 border-black bg-black md:grid-cols-3">
            {VALEURS_EQUIPE.map((valeur, i) => (
              <div
                key={valeur.titre}
                className="stagger-item group bg-white p-8 transition-colors duration-300 hover:bg-primary"
              >
                <span className="font-heading text-4xl font-bold text-gray-200 transition-colors duration-300 group-hover:text-black">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="heading-sm mt-4">{valeur.titre}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-black/80">
                  {valeur.texte}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Recrutement */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <Reveal variant="scale">
          <div className="border-2 border-black bg-black p-8 text-white md:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="eyebrow text-primary">Nous rejoindre</span>
                <h2 className="heading-md mt-4 text-white">
                  Vous voulez construire l&apos;avenir du commerce local ?
                </h2>
                <p className="mt-4 font-sans leading-relaxed text-gray-400">
                  Nous recrutons régulièrement des profils produit, technique et
                  terrain. Envoyez-nous votre parcours, même sans offre ouverte.
                </p>
              </div>

              <Link href="/contact" className="btn-primary group shrink-0">
                <Mail size={18} aria-hidden />
                Candidature spontanée
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

      <CTASection
        title="Découvrez ce que nous construisons"
        description="L'application Axì rassemble déjà des centaines de stands actifs partout au Bénin."
        primaryLabel="Télécharger l'application"
        primaryHref="/telecharger"
        secondaryLabel="Notre histoire"
        secondaryHref="/qui-sommes-nous"
      />
    </>
  );
}
