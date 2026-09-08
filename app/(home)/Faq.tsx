"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const FAQS = [
  {
    question: "Est-ce gratuit ?",
    answer:
      "Oui. Créer un stand est entièrement gratuit, tout comme l'utilisation de l'application pour les simples utilisateurs.",
  },
  {
    question: "Comment passer une commande ?",
    answer:
      "Parcourez les stands, sélectionnez vos produits, contactez le vendeur via le chat et confirmez votre commande en quelques clics.",
  },
  {
    question: "Quels types de services trouve-t-on sur Axì ?",
    answer:
      "Vous trouverez des restaurants, boutiques, artisans, services de proximité, et bien plus encore dans votre région.",
  },
  {
    question: "Y a-t-il des abonnements ?",
    answer:
      "Non, l'utilisation de base est gratuite. Des fonctionnalités premium pourront être proposées aux vendeurs pour plus de visibilité.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-8 md:flex-row">
      {/* Questions */}
      <ul className="flex-1 divide-y-2 divide-black border-2 border-black">
        {FAQS.map((faq, index) => {
          const actif = activeIndex === index;

          return (
            <li key={faq.question}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-expanded={actif}
                aria-controls="faq-reponse"
                className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors duration-300 md:px-6 ${
                  actif
                    ? "border-l-8 border-primary bg-gray-50 font-semibold"
                    : "border-l-8 border-transparent bg-white hover:bg-gray-50"
                }`}
              >
                <span className="font-sans text-base text-black md:text-lg">
                  {faq.question}
                </span>
                <ChevronRight
                  size={20}
                  strokeWidth={3}
                  className={`shrink-0 transition-all duration-300 ${
                    actif ? "translate-x-0 text-primary" : "-translate-x-1 text-gray-300"
                  }`}
                  aria-hidden
                />
              </button>

              {/* Réponse repliée sous la question sur mobile */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
                  actif ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-t-2 border-black bg-primary px-5 py-5 font-sans text-sm leading-relaxed text-black">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Réponse en colonne sur desktop */}
      <div className="hidden flex-1 md:block">
        <div
          id="faq-reponse"
          key={activeIndex}
          className="flex min-h-[250px] animate-fade-in flex-col justify-center border-2 border-black bg-primary p-8"
        >
          <p className="font-sans text-lg font-medium leading-relaxed text-black">
            {FAQS[activeIndex].answer}
          </p>
        </div>
      </div>
    </div>
  );
}
