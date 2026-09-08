"use client";

import { useState, type FormEvent } from "react";
import { Send, Check } from "lucide-react";

const SUJETS = [
  "Ouvrir un stand",
  "Problème technique",
  "Partenariat",
  "Presse",
  "Candidature",
  "Autre",
] as const;

const CONTACT_EMAIL = "contact@axi.bj";

const champClasses =
  "w-full border-2 border-black bg-white px-4 py-3 font-sans text-sm text-black placeholder:text-gray-400 transition-shadow duration-200 focus:shadow-[4px_4px_0_0_#FFBE00] focus:outline-none";

/**
 * Formulaire de contact sans backend : il compose un e-mail pré-rempli
 * et l'ouvre dans le client de messagerie de l'utilisateur.
 * Brancher ici une route API le jour où un backend existe.
 */
export default function ContactForm() {
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const nom = String(data.get("nom") ?? "");
    const email = String(data.get("email") ?? "");
    const sujet = String(data.get("sujet") ?? "");
    const message = String(data.get("message") ?? "");

    const corps = [
      `Nom : ${nom}`,
      `E-mail : ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `[Axì] ${sujet}`
    )}&body=${encodeURIComponent(corps)}`;

    setEnvoye(true);
  };

  return (
    <form onSubmit={handleSubmit} className="card-flat" noValidate={false}>
      <h2 className="heading-sm">Écrivez-nous</h2>
      <p className="mt-2 font-sans text-sm text-gray-600">
        Nous répondons sous 48 heures ouvrées.
      </p>

      <div className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="nom"
              className="mb-2 block font-sans text-sm font-semibold text-black"
            >
              Nom complet <span className="text-primary">*</span>
            </label>
            <input
              id="nom"
              name="nom"
              type="text"
              required
              autoComplete="name"
              placeholder="Votre nom"
              className={champClasses}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-sans text-sm font-semibold text-black"
            >
              Adresse e-mail <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="vous@exemple.com"
              className={champClasses}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="sujet"
            className="mb-2 block font-sans text-sm font-semibold text-black"
          >
            Sujet <span className="text-primary">*</span>
          </label>
          <select id="sujet" name="sujet" required className={champClasses}>
            {SUJETS.map((sujet) => (
              <option key={sujet} value={sujet}>
                {sujet}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block font-sans text-sm font-semibold text-black"
          >
            Message <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Décrivez votre demande…"
            className={`${champClasses} resize-y`}
          />
        </div>

        <button type="submit" className="btn-primary group w-full sm:w-auto">
          Envoyer le message
          <Send
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </button>

        <p aria-live="polite" className="min-h-6">
          {envoye && (
            <span className="inline-flex items-center gap-2 border-2 border-black bg-primary px-4 py-2 font-sans text-sm font-semibold text-black">
              <Check size={16} strokeWidth={3} aria-hidden />
              Votre messagerie s&apos;ouvre avec le message pré-rempli.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
