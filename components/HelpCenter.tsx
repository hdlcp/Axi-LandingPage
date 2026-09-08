"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, SearchX } from "lucide-react";

type Article = {
  categorie: string;
  question: string;
  reponse: string;
};

const ARTICLES: Article[] = [
  {
    categorie: "Démarrer",
    question: "Est-ce que Axì est gratuit ?",
    reponse:
      "Oui. Créer un stand est entièrement gratuit, tout comme l'utilisation de l'application pour les simples utilisateurs. Publier, discuter et recevoir des commandes ne coûte rien.",
  },
  {
    categorie: "Démarrer",
    question: "Comment créer mon stand digital ?",
    reponse:
      "Installez l'application, choisissez « Ouvrir un stand », renseignez votre activité, votre zone et quelques photos. Votre vitrine est en ligne en quelques minutes.",
  },
  {
    categorie: "Démarrer",
    question: "Qui peut ouvrir un stand sur Axì ?",
    reponse:
      "Toute personne qui vend un produit ou propose un service : vendeuses, artisans, PME, couturières, restaurants, coiffeuses, réparateurs, boutiques, et bien d'autres.",
  },
  {
    categorie: "Commandes",
    question: "Comment passer une commande ?",
    reponse:
      "Parcourez les stands, sélectionnez vos produits, contactez le vendeur via le chat et confirmez votre commande en quelques clics.",
  },
  {
    categorie: "Commandes",
    question: "Puis-je réserver sans commander ?",
    reponse:
      "Oui. Pour les services (coiffure, retouche, réparation), vous pouvez réserver un créneau et convenir de l'heure directement dans la discussion avec le stand.",
  },
  {
    categorie: "Commandes",
    question: "Comment se passe le paiement ?",
    reponse:
      "Le paiement se règle directement avec le stand, selon les moyens qu'il accepte. Axì ne prélève aucune commission sur vos transactions.",
  },
  {
    categorie: "Stands",
    question: "Combien de publications puis-je faire ?",
    reponse:
      "Les publications sont illimitées. Vous pouvez ajouter autant de produits, photos et nouveautés que vous le souhaitez, sans quota.",
  },
  {
    categorie: "Stands",
    question: "Comment gagner en visibilité ?",
    reponse:
      "Publiez régulièrement, soignez vos photos et remplissez complètement votre stand. Le classement par proximité fait ensuite remonter votre stand auprès des utilisateurs de votre zone.",
  },
  {
    categorie: "Stands",
    question: "Comment modifier ou fermer mon stand ?",
    reponse:
      "Tout se gère depuis l'application, dans l'espace « Mon stand ». Vous pouvez mettre votre stand en pause à tout moment, ou le supprimer définitivement.",
  },
  {
    categorie: "Compte & données",
    question: "Y a-t-il des abonnements ?",
    reponse:
      "Non, l'utilisation de base est gratuite. Des fonctionnalités premium pourront être proposées aux vendeurs pour plus de visibilité, sans jamais rendre l'essentiel payant.",
  },
  {
    categorie: "Compte & données",
    question: "Pourquoi Axì demande ma localisation ?",
    reponse:
      "La localisation sert uniquement à classer les stands par proximité. Vous pouvez la refuser : l'application reste utilisable, mais les résultats seront moins pertinents.",
  },
  {
    categorie: "Compte & données",
    question: "Comment supprimer mes données ?",
    reponse:
      "Vous pouvez demander la suppression de votre compte et de vos données à tout moment depuis l'application, ou en nous écrivant. Voir notre politique de confidentialité.",
  },
];

const CATEGORIES = ["Toutes", ...new Set(ARTICLES.map((a) => a.categorie))];

/** Retire les accents pour que « creer » trouve « créer ». */
const normaliser = (valeur: string) =>
  valeur
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function HelpCenter() {
  const [recherche, setRecherche] = useState("");
  const [categorie, setCategorie] = useState("Toutes");
  const [ouvert, setOuvert] = useState<string | null>(ARTICLES[0].question);

  const resultats = useMemo(() => {
    const terme = normaliser(recherche.trim());

    return ARTICLES.filter((article) => {
      const correspondCategorie =
        categorie === "Toutes" || article.categorie === categorie;
      if (!correspondCategorie) return false;
      if (!terme) return true;

      return normaliser(`${article.question} ${article.reponse}`).includes(terme);
    });
  }, [recherche, categorie]);

  return (
    <div>
      {/* Recherche */}
      <div className="relative">
        <Search
          size={20}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          aria-hidden
        />
        <input
          type="search"
          value={recherche}
          onChange={(event) => setRecherche(event.target.value)}
          placeholder="Rechercher une question…"
          aria-label="Rechercher dans le centre d'aide"
          className="w-full border-2 border-black bg-white py-4 pl-12 pr-4 font-sans text-sm text-black placeholder:text-gray-400 transition-shadow duration-200 focus:shadow-[5px_5px_0_0_#FFBE00] focus:outline-none"
        />
      </div>

      {/* Catégories */}
      <div className="mt-6 flex flex-wrap gap-3">
        {CATEGORIES.map((cat) => {
          const actif = cat === categorie;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setCategorie(cat)}
              aria-pressed={actif}
              className={`border-2 border-black px-4 py-2 font-sans text-sm font-semibold transition-all duration-200 ${
                actif
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-primary"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Compteur */}
      <p aria-live="polite" className="mt-6 font-sans text-sm text-gray-500">
        {resultats.length} article{resultats.length > 1 ? "s" : ""} trouvé
        {resultats.length > 1 ? "s" : ""}
      </p>

      {/* Résultats */}
      {resultats.length > 0 ? (
        <ul className="mt-4 divide-y-2 divide-black border-2 border-black">
          {resultats.map((article) => {
            const estOuvert = ouvert === article.question;

            return (
              <li key={article.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() =>
                      setOuvert(estOuvert ? null : article.question)
                    }
                    aria-expanded={estOuvert}
                    className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-200 md:px-6 ${
                      estOuvert ? "bg-primary" : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span>
                      <span className="block font-sans text-xs uppercase tracking-widest text-black/50">
                        {article.categorie}
                      </span>
                      <span className="mt-1 block font-sans font-semibold text-black">
                        {article.question}
                      </span>
                    </span>
                    <ChevronDown
                      size={22}
                      className={`shrink-0 transition-transform duration-300 ${
                        estOuvert ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    estOuvert ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t-2 border-black bg-white px-5 py-5 font-sans text-sm leading-relaxed text-gray-700 md:px-6">
                      {article.reponse}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="mt-4 border-2 border-black bg-white p-10 text-center">
          <SearchX size={36} className="mx-auto text-gray-300" aria-hidden />
          <p className="mt-4 font-sans font-semibold text-black">
            Aucun article ne correspond à « {recherche} »
          </p>
          <p className="mt-2 font-sans text-sm text-gray-600">
            Essayez un autre mot-clé, ou écrivez-nous directement.
          </p>
          <Link href="/contact" className="btn-primary mt-6">
            Contacter le support
          </Link>
        </div>
      )}
    </div>
  );
}
