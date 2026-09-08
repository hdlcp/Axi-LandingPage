import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";

const COLUMNS = [
  {
    title: "Produit",
    links: [
      { href: "/services", label: "Nos services" },
      { href: "/telecharger", label: "Télécharger l'application" },
      { href: "/tarifs", label: "Tarifs" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { href: "/aide", label: "Centre d'aide" },
      { href: "/contact", label: "Nous écrire" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/confidentialite", label: "Politique de confidentialité" },
      { href: "/conditions", label: "Termes et conditions" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/a-propos", label: "À propos" },
      { href: "/qui-sommes-nous", label: "Qui sommes-nous ?" },
      { href: "/equipe", label: "Équipe" },
      { href: "/contact", label: "Contact" },
    ],
  },
] as const;

const SOCIALS = [
  { href: "https://facebook.com", label: "Facebook", Icon: FaFacebook },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://tiktok.com", label: "TikTok", Icon: FaTiktok },
  { href: "https://youtube.com", label: "YouTube", Icon: FaYoutube },
] as const;

export default function Footer() {
  return (
    <footer className="mt-20 border-t-4 border-primary bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Logo + description */}
          <div className="col-span-2 lg:col-span-1">
            <Image
              src="/Axifooter.jpg"
              alt="Logo Axì"
              width={56}
              height={56}
              className="mb-4 border-2 border-primary"
            />
            <p className="mb-6 max-w-xs font-sans text-sm font-light leading-relaxed text-gray-300">
              Le marché digital de proximité au service des Béninois.
            </p>

            <div className="flex gap-3">
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

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-primary">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="inline-block font-sans text-sm text-gray-400 transition-all duration-200 hover:translate-x-1 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
          <p className="font-sans text-xs text-gray-500">
            © {new Date().getFullYear()} Axì. Tous droits réservés.
          </p>
          <p className="font-sans text-xs text-gray-500">
            Fait au Bénin <span className="text-primary">◼</span> pour le commerce local
          </p>
        </div>
      </div>
    </footer>
  );
}
