import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { ArrowRight, Clock, Mail, MapPin, Phone, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description:
    "Une question sur Axì, un partenariat, un problème technique ? Écrivez-nous, nous répondons sous 48 heures ouvrées.",
};

const COORDONNEES = [
  {
    Icon: Mail,
    label: "E-mail",
    valeur: "contact@axi.bj",
    href: "mailto:contact@axi.bj",
  },
  {
    Icon: Phone,
    label: "Téléphone",
    valeur: "+229 00 00 00 00",
    href: "tel:+22900000000",
  },
  {
    Icon: MapPin,
    label: "Adresse",
    valeur: "Cotonou, Bénin",
    href: null,
  },
  {
    Icon: Clock,
    label: "Horaires",
    valeur: "Lun – Ven, 8h – 18h",
    href: null,
  },
];

const SOCIALS = [
  { href: "https://facebook.com", label: "Facebook", Icon: FaFacebook },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://tiktok.com", label: "TikTok", Icon: FaTiktok },
  { href: "https://youtube.com", label: "YouTube", Icon: FaYoutube },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        breadcrumb="Contactez-nous"
        title={
          <>
            Parlons de votre <span className="text-primary">projet</span>
          </>
        }
        description="Une question sur l'application, l'ouverture d'un stand, un partenariat ou la presse : nous lisons tous les messages."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Formulaire */}
          <Reveal variant="left" className="lg:col-span-3">
            <ContactForm />
          </Reveal>

          {/* Coordonnées */}
          <Reveal variant="right" delay={120} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="border-2 border-black bg-black p-8 text-white">
                <h2 className="heading-sm text-white">Nos coordonnées</h2>

                <ul className="mt-6 space-y-5">
                  {COORDONNEES.map(({ Icon, label, valeur, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-primary text-primary">
                        <Icon size={18} aria-hidden />
                      </span>
                      <div>
                        <span className="block font-sans text-xs uppercase tracking-widest text-gray-500">
                          {label}
                        </span>
                        {href ? (
                          <a
                            href={href}
                            className="font-sans text-sm text-white transition-colors hover:text-primary"
                          >
                            {valeur}
                          </a>
                        ) : (
                          <span className="font-sans text-sm text-white">
                            {valeur}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-gray-800 pt-6">
                  <span className="font-sans text-xs uppercase tracking-widest text-gray-500">
                    Suivez-nous
                  </span>
                  <div className="mt-4 flex gap-3">
                    {SOCIALS.map(({ href, label, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center border-2 border-gray-700 text-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-black"
                      >
                        <Icon size={18} aria-hidden />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Renvoi vers l'aide */}
              <div className="border-2 border-black bg-primary p-8">
                <HelpCircle size={26} aria-hidden />
                <h2 className="heading-sm mt-4">Une question simple ?</h2>
                <p className="mt-3 font-sans text-sm leading-relaxed text-black/80">
                  La réponse se trouve peut-être déjà dans notre centre
                  d&apos;aide — c&apos;est souvent plus rapide.
                </p>
                <Link
                  href="/aide"
                  className="group mt-5 inline-flex items-center gap-2 border-2 border-black bg-white px-4 py-2 font-sans text-sm font-semibold text-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#000]"
                >
                  Consulter le centre d&apos;aide
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bandeau localisation */}
      <section className="border-y-2 border-black bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <Reveal>
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-black bg-primary">
                  <MapPin size={24} aria-hidden />
                </span>
                <div>
                  <h2 className="heading-sm">Axì est basée à Cotonou</h2>
                  <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-gray-700">
                    Notre équipe se déplace régulièrement dans les marchés et
                    quartiers du Bénin pour accompagner les commerçants sur le
                    terrain.
                  </p>
                </div>
              </div>

              <Link href="/equipe" className="btn-outline shrink-0">
                Rencontrer l&apos;équipe
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
