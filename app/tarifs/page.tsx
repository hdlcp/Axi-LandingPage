import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { ArrowRight, Check, Minus } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Créer un stand sur Axì est gratuit, sans commission et sans abonnement. Découvrez le détail des offres.",
};

const OFFRES = [
  {
    nom: "Stand Gratuit",
    prix: "0",
    unite: "FCFA / toujours",
    resume: "Tout ce qu'il faut pour vendre en ligne dès aujourd'hui.",
    inclus: [
      "Création de stand illimitée dans le temps",
      "Publications illimitées",
      "Présence dans le fil d'actualité local",
      "Commandes et réservations en ligne",
      "Discussion instantanée avec les clients",
      "Classement par proximité géographique",
    ],
    cta: { label: "Ouvrir mon stand", href: "/telecharger" },
    accent: true,
    badge: "Le plus utilisé",
  },
  {
    nom: "Visibilité Premium",
    prix: "Bientôt",
    unite: "en préparation",
    resume:
      "Pour les stands qui veulent aller plus loin que leur quartier.",
    inclus: [
      "Tout ce qui est inclus dans l'offre gratuite",
      "Mise en avant dans le fil d'actualité",
      "Statistiques détaillées de votre stand",
      "Badge stand vérifié",
      "Support prioritaire",
    ],
    cta: { label: "Être prévenu", href: "/contact" },
    accent: false,
    badge: null,
  },
  {
    nom: "Entreprise",
    prix: "Sur devis",
    unite: "selon vos besoins",
    resume:
      "Pour les réseaux, marchés et groupements de plusieurs stands.",
    inclus: [
      "Gestion de plusieurs stands",
      "Accompagnement au déploiement",
      "Formation des équipes sur le terrain",
      "Interlocuteur dédié",
    ],
    cta: { label: "Nous contacter", href: "/contact" },
    accent: false,
    badge: null,
  },
];

const COMPARATIF: { critere: string; valeurs: (boolean | string)[] }[] = [
  { critere: "Création du stand", valeurs: [true, true, true] },
  { critere: "Publications illimitées", valeurs: [true, true, true] },
  { critere: "Commandes & réservations", valeurs: [true, true, true] },
  { critere: "Messagerie instantanée", valeurs: [true, true, true] },
  { critere: "Commission sur les ventes", valeurs: ["Aucune", "Aucune", "Aucune"] },
  { critere: "Mise en avant dans le fil", valeurs: [false, true, true] },
  { critere: "Statistiques détaillées", valeurs: [false, true, true] },
  { critere: "Badge stand vérifié", valeurs: [false, true, true] },
  { critere: "Gestion multi-stands", valeurs: [false, false, true] },
  { critere: "Interlocuteur dédié", valeurs: [false, false, true] },
];

const FAQ_TARIFS = [
  {
    question: "Axì prend-elle une commission sur mes ventes ?",
    reponse:
      "Non. Aucune commission n'est prélevée sur vos commandes. Le paiement se règle directement entre vous et votre client.",
  },
  {
    question: "L'offre gratuite est-elle limitée dans le temps ?",
    reponse:
      "Non. Créer un stand, publier et recevoir des commandes restera gratuit. C'est un engagement, pas une promotion.",
  },
  {
    question: "Que se passera-t-il quand Premium sortira ?",
    reponse:
      "Rien ne change pour votre stand gratuit. Premium ajoutera de la visibilité et des statistiques, sans jamais rendre l'essentiel payant.",
  },
  {
    question: "Comment est facturée l'offre Entreprise ?",
    reponse:
      "Sur devis, selon le nombre de stands à déployer et l'accompagnement souhaité. Écrivez-nous pour en discuter.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tarifs"
        breadcrumb="Tarifs"
        title={
          <>
            L&apos;essentiel est <span className="text-primary">gratuit</span>. Et
            le restera.
          </>
        }
        description="Créer un stand, publier, discuter et recevoir des commandes ne coûte rien. Aucun abonnement obligatoire, aucune commission sur vos ventes."
      />

      {/* Offres */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {OFFRES.map((offre) => (
              <article
                key={offre.nom}
                className={`stagger-item relative flex h-full flex-col border-2 border-black p-8 transition-all duration-300 hover:-translate-y-1 ${
                  offre.accent ? "bg-primary" : "bg-white"
                }`}
              >
                {offre.badge && (
                  <span className="absolute -top-4 left-8 border-2 border-black bg-black px-3 py-1 font-sans text-xs font-semibold uppercase tracking-widest text-primary">
                    {offre.badge}
                  </span>
                )}

                <h2 className="heading-sm">{offre.nom}</h2>
                <p className="mt-2 font-sans text-sm text-black/70">
                  {offre.resume}
                </p>

                <div className="mt-6 border-y-2 border-black/15 py-6">
                  <span className="font-heading text-4xl font-bold md:text-5xl">
                    {offre.prix}
                  </span>
                  <span className="mt-1 block font-sans text-sm text-black/60">
                    {offre.unite}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {offre.inclus.map((ligne) => (
                    <li key={ligne} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-black ${
                          offre.accent ? "bg-white" : "bg-primary"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} aria-hidden />
                      </span>
                      <span className="font-sans text-sm text-black/85">
                        {ligne}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={offre.cta.href}
                  className={`group mt-8 inline-flex items-center justify-center gap-2 border-2 border-black px-6 py-3 font-sans font-semibold transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 ${
                    offre.accent
                      ? "bg-black text-white hover:shadow-[6px_6px_0_0_#000]"
                      : "bg-primary text-black hover:shadow-[6px_6px_0_0_#000]"
                  }`}
                >
                  {offre.cta.label}
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Comparatif */}
      <section className="border-y-2 border-black bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <Reveal>
            <span className="eyebrow text-black/60">Comparatif</span>
            <h2 className="heading-lg mt-4">Ce que contient chaque offre</h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 overflow-x-auto border-2 border-black bg-white">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <caption className="sr-only">
                  Comparatif des offres Axì : Gratuit, Visibilité Premium et
                  Entreprise
                </caption>
                <thead>
                  <tr className="bg-black text-white">
                    <th
                      scope="col"
                      className="px-5 py-4 font-sans text-sm font-semibold"
                    >
                      Fonctionnalité
                    </th>
                    {OFFRES.map((offre) => (
                      <th
                        key={offre.nom}
                        scope="col"
                        className="px-5 py-4 text-center font-sans text-sm font-semibold"
                      >
                        {offre.nom}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARATIF.map((ligne, i) => (
                    <tr
                      key={ligne.critere}
                      className={i % 2 === 1 ? "bg-gray-50" : "bg-white"}
                    >
                      <th
                        scope="row"
                        className="border-t-2 border-gray-100 px-5 py-4 font-sans text-sm font-medium text-black"
                      >
                        {ligne.critere}
                      </th>
                      {ligne.valeurs.map((valeur, j) => (
                        <td
                          key={`${ligne.critere}-${j}`}
                          className="border-t-2 border-gray-100 px-5 py-4 text-center"
                        >
                          {typeof valeur === "string" ? (
                            <span className="font-sans text-sm text-gray-700">
                              {valeur}
                            </span>
                          ) : valeur ? (
                            <span className="mx-auto flex h-6 w-6 items-center justify-center border-2 border-black bg-primary">
                              <Check size={13} strokeWidth={3} aria-hidden />
                              <span className="sr-only">Inclus</span>
                            </span>
                          ) : (
                            <span className="mx-auto flex h-6 w-6 items-center justify-center text-gray-300">
                              <Minus size={16} aria-hidden />
                              <span className="sr-only">Non inclus</span>
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ tarifs */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Reveal>
          <span className="eyebrow text-primary">Questions sur les tarifs</span>
          <h2 className="heading-lg mt-4">Ce qu&apos;on nous demande souvent</h2>
        </Reveal>

        <Reveal delay={100}>
          <dl className="mt-10 divide-y-2 divide-black border-2 border-black">
            {FAQ_TARIFS.map((item) => (
              <div key={item.question} className="stagger-item bg-white p-6">
                <dt className="font-sans font-semibold text-black">
                  {item.question}
                </dt>
                <dd className="mt-2 font-sans text-sm leading-relaxed text-gray-700">
                  {item.reponse}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <CTASection
        title="Commencez gratuitement"
        description="Aucune carte bancaire, aucun engagement. Votre stand peut être en ligne dans quelques minutes."
        primaryLabel="Créer mon stand"
        primaryHref="/telecharger"
        secondaryLabel="Une question ?"
        secondaryHref="/aide"
      />
    </>
  );
}
