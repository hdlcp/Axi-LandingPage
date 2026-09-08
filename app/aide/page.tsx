import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import HelpCenter from "@/components/HelpCenter";
import { ArrowRight, MessageCircle, ShoppingCart, Store, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Centre d'aide",
  description:
    "Toutes les réponses sur Axì : créer un stand, passer commande, gérer son compte et ses données.",
};

const RACCOURCIS = [
  {
    Icon: Store,
    titre: "Ouvrir un stand",
    texte: "Créer votre vitrine digitale gratuitement.",
  },
  {
    Icon: ShoppingCart,
    titre: "Commander & réserver",
    texte: "Passer une commande ou réserver un créneau.",
  },
  {
    Icon: MessageCircle,
    titre: "Discuter avec un stand",
    texte: "Utiliser la messagerie instantanée.",
  },
  {
    Icon: User,
    titre: "Compte & données",
    texte: "Gérer votre profil et votre vie privée.",
  },
];

export default function AidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Centre d'aide"
        breadcrumb="Centre d'aide"
        title={
          <>
            Comment pouvons-nous <span className="text-primary">vous aider</span> ?
          </>
        }
        description="Recherchez une réponse, ou parcourez les questions les plus fréquentes des utilisateurs et des commerçants."
      />

      {/* Raccourcis */}
      <section className="border-b-2 border-black bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {RACCOURCIS.map(({ Icon, titre, texte }) => (
                <div key={titre} className="stagger-item card-sharp group">
                  <Icon
                    size={24}
                    className="text-primary transition-transform duration-300 group-hover:scale-110"
                    aria-hidden
                  />
                  <h2 className="mt-4 font-sans font-semibold text-black">{titre}</h2>
                  <p className="mt-1 font-sans text-sm text-gray-600">{texte}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recherche + FAQ */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Reveal>
          <span className="eyebrow text-primary">Questions fréquentes</span>
          <h2 className="heading-lg mt-4">Trouvez votre réponse</h2>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <HelpCenter />
        </Reveal>
      </section>

      {/* Toujours bloqué */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
        <Reveal variant="scale">
          <div className="border-2 border-black bg-primary p-8 md:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="heading-md">Vous n&apos;avez pas trouvé ?</h2>
                <p className="mt-4 font-sans leading-relaxed text-black/80">
                  Notre équipe support répond sous 48 heures ouvrées, en français,
                  et accompagne les commerçants pas à pas.
                </p>
              </div>

              <Link href="/contact" className="btn-dark group shrink-0">
                Contacter le support
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
    </>
  );
}
