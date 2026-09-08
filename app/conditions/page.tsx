import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LegalArticle, { type LegalSection } from "@/components/LegalArticle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Termes et conditions",
  description:
    "Conditions générales d'utilisation de l'application et du site Axì : compte, stands, commandes, responsabilités.",
};

const MISE_A_JOUR = "1er janvier 2026";

const SECTIONS: LegalSection[] = [
  {
    id: "objet",
    titre: "Objet",
    paragraphes: [
      "Les présentes conditions générales encadrent l'utilisation de l'application mobile et du site web Axì, qui mettent en relation des vendeurs de proximité (vendeuses, artisans, PME, restaurants, couturières, coiffeuses et autres) avec les habitants de leur zone.",
      "En créant un compte ou en utilisant le service, vous acceptez ces conditions dans leur intégralité.",
    ],
  },
  {
    id: "compte",
    titre: "Création et gestion du compte",
    puces: [
      "Vous devez fournir des informations exactes et les tenir à jour.",
      "Vous êtes responsable de la confidentialité de vos identifiants et des actions effectuées depuis votre compte.",
      "Un compte est personnel ; il ne peut être cédé ni revendu.",
      "Vous pouvez supprimer votre compte à tout moment depuis l'application.",
    ],
  },
  {
    id: "stands",
    titre: "Stands et publications",
    paragraphes: [
      "La création d'un stand est gratuite et les publications sont illimitées. Vous restez propriétaire des contenus que vous publiez et nous accordez une licence non exclusive pour les afficher dans le service.",
    ],
    puces: [
      "Les produits et services proposés doivent être licites et conformes à leur description.",
      "Les photos publiées doivent vous appartenir ou vous être librement utilisables.",
      "Sont interdits : contenus trompeurs, contrefaçons, produits réglementés sans autorisation, propos haineux ou discriminatoires.",
      "Axì peut suspendre ou retirer un stand ou une publication qui contrevient à ces règles.",
    ],
  },
  {
    id: "commandes",
    titre: "Commandes, réservations et paiement",
    paragraphes: [
      "Axì est un espace de mise en relation. Le contrat de vente ou de prestation se forme directement entre le client et le stand.",
      "Le paiement s'effectue selon les modalités convenues entre les deux parties. Axì ne perçoit aucune commission sur les transactions et n'intervient pas dans leur règlement.",
    ],
    puces: [
      "Le stand est responsable de la disponibilité, de la qualité et de la conformité de ce qu'il propose.",
      "Le client s'engage à honorer les commandes et réservations qu'il confirme.",
      "Les litiges se règlent entre le client et le stand ; Axì peut faciliter le dialogue sans être partie au contrat.",
    ],
  },
  {
    id: "messagerie",
    titre: "Messagerie et comportement",
    paragraphes: [
      "La messagerie intégrée sert à préciser une commande, convenir d'un rendez-vous ou poser une question. Elle doit être utilisée avec respect.",
      "Le harcèlement, le démarchage abusif, l'usurpation d'identité et l'envoi de contenus illicites entraînent la suspension immédiate du compte.",
    ],
  },
  {
    id: "geolocalisation",
    titre: "Géolocalisation",
    paragraphes: [
      "Le classement par proximité repose sur votre position approximative, que vous autorisez explicitement. Vous pouvez la refuser ou la révoquer à tout moment : le service reste utilisable, avec des résultats moins pertinents.",
    ],
  },
  {
    id: "disponibilite",
    titre: "Disponibilité du service",
    paragraphes: [
      "Nous mettons tout en œuvre pour assurer un service continu, sans pouvoir garantir une disponibilité ininterrompue. Des interruptions peuvent survenir pour maintenance, mise à jour ou cause extérieure.",
      "Axì peut faire évoluer, suspendre ou arrêter tout ou partie des fonctionnalités, en informant les utilisateurs dans un délai raisonnable.",
    ],
  },
  {
    id: "responsabilite",
    titre: "Responsabilité",
    puces: [
      "Axì n'est pas responsable de la qualité des produits et services proposés par les stands.",
      "Axì n'est pas responsable des contenus publiés par les utilisateurs, mais retire promptement tout contenu manifestement illicite signalé.",
      "La responsabilité d'Axì ne saurait être engagée pour les dommages indirects résultant de l'utilisation du service.",
    ],
  },
  {
    id: "propriete",
    titre: "Propriété intellectuelle",
    paragraphes: [
      "La marque Axì, le logo, l'interface, les textes et les éléments graphiques du service sont protégés. Toute reproduction ou exploitation sans autorisation écrite est interdite.",
    ],
  },
  {
    id: "evolution",
    titre: "Évolution des conditions",
    paragraphes: [
      "Ces conditions peuvent être modifiées pour accompagner l'évolution du service ou de la réglementation. Les modifications importantes sont annoncées dans l'application avant leur entrée en vigueur.",
      "La poursuite de l'utilisation du service après cette date vaut acceptation des nouvelles conditions.",
    ],
  },
  {
    id: "droit-applicable",
    titre: "Droit applicable",
    paragraphes: [
      "Les présentes conditions sont régies par le droit béninois. En cas de litige, les parties rechercheront une solution amiable avant toute action judiciaire.",
    ],
  },
];

export default function ConditionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        breadcrumb="Termes et conditions"
        title={
          <>
            Termes et <span className="text-primary">conditions</span>
          </>
        }
        description="Les règles du marché : ce que vous pouvez attendre d'Axì, et ce que nous attendons des stands comme des utilisateurs."
      />

      <LegalArticle
        miseAJour={MISE_A_JOUR}
        intro="En utilisant Axì, vous acceptez les conditions ci-dessous. Elles définissent le rôle de la plateforme, les obligations de chacun et les limites de notre responsabilité dans les échanges entre clients et stands."
        sections={SECTIONS}
      />

      <CTASection
        title="Une clause à clarifier ?"
        description="Notre équipe répond volontiers aux questions sur ces conditions, en français et sans jargon."
        primaryLabel="Nous contacter"
        primaryHref="/contact"
        secondaryLabel="Politique de confidentialité"
        secondaryHref="/confidentialite"
      />
    </>
  );
}
