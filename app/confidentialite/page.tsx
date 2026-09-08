import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LegalArticle, { type LegalSection } from "@/components/LegalArticle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment Axì collecte, utilise et protège les données personnelles de ses utilisateurs et de ses commerçants.",
};

const MISE_A_JOUR = "1er janvier 2026";

const SECTIONS: LegalSection[] = [
  {
    id: "responsable",
    titre: "Responsable du traitement",
    paragraphes: [
      "Axì édite et exploite l'application mobile et le site web permettant de découvrir et de contacter des stands de proximité au Bénin.",
      "Pour toute question relative à cette politique ou à vos données personnelles, vous pouvez nous écrire à contact@axi.bj.",
    ],
  },
  {
    id: "donnees-collectees",
    titre: "Données que nous collectons",
    paragraphes: [
      "Nous collectons uniquement les données nécessaires au fonctionnement du service.",
    ],
    puces: [
      "Données de compte : nom ou nom du stand, numéro de téléphone, adresse e-mail, mot de passe chiffré.",
      "Données de stand : activité, description, photos, produits, horaires et zone d'intervention.",
      "Données de localisation : position approximative, uniquement si vous l'autorisez, pour classer les stands par proximité.",
      "Données d'usage : pages consultées, stands ouverts, recherches effectuées, afin d'améliorer l'application.",
      "Contenus échangés : messages envoyés via la messagerie intégrée entre un client et un stand.",
    ],
  },
  {
    id: "finalites",
    titre: "Pourquoi nous les utilisons",
    puces: [
      "Créer et gérer votre compte ainsi que votre stand.",
      "Afficher les stands les plus proches de vous et personnaliser votre fil d'actualité.",
      "Permettre les commandes, les réservations et la discussion avec les stands.",
      "Assurer la sécurité du service et prévenir les usages frauduleux.",
      "Mesurer l'usage de l'application afin de l'améliorer.",
      "Vous informer d'évolutions importantes du service.",
    ],
  },
  {
    id: "base-legale",
    titre: "Base légale et consentement",
    paragraphes: [
      "Le traitement de vos données repose selon les cas sur l'exécution du service auquel vous souscrivez, sur votre consentement (notamment pour la géolocalisation et les notifications), ou sur notre intérêt légitime à sécuriser et améliorer la plateforme.",
      "Vous pouvez retirer votre consentement à tout moment depuis les réglages de l'application, sans que cela remette en cause la licéité des traitements déjà effectués.",
    ],
  },
  {
    id: "partage",
    titre: "Partage des données",
    paragraphes: [
      "Nous ne vendons pas vos données personnelles, à personne, dans aucune circonstance.",
    ],
    puces: [
      "Les informations publiques de votre stand (nom, activité, photos, zone) sont visibles par les utilisateurs de l'application.",
      "Vos coordonnées ne sont transmises à un stand que lorsque vous engagez une discussion ou une commande avec lui.",
      "Nous faisons appel à des prestataires techniques (hébergement, notifications, analyse d'audience) qui agissent sur nos instructions et sont tenus à la confidentialité.",
      "Nous pouvons transmettre des données si la loi ou une autorité judiciaire compétente l'exige.",
    ],
  },
  {
    id: "conservation",
    titre: "Durée de conservation",
    paragraphes: [
      "Vos données de compte sont conservées tant que votre compte est actif. Après suppression, elles sont effacées ou anonymisées sous trente jours, sauf obligation légale de conservation plus longue.",
      "Les messages échangés avec les stands sont conservés le temps nécessaire au bon déroulement des commandes, puis supprimés.",
    ],
  },
  {
    id: "securite",
    titre: "Sécurité",
    paragraphes: [
      "Les mots de passe sont chiffrés, les échanges avec nos serveurs sont sécurisés, et l'accès aux données est restreint aux membres de l'équipe qui en ont réellement besoin.",
      "Aucun système n'est infaillible : en cas d'incident affectant vos données, nous vous en informerons dans les meilleurs délais.",
    ],
  },
  {
    id: "droits",
    titre: "Vos droits",
    paragraphes: [
      "Vous disposez à tout moment des droits suivants sur vos données personnelles :",
    ],
    puces: [
      "Droit d'accès : obtenir une copie des données que nous détenons sur vous.",
      "Droit de rectification : corriger une information inexacte.",
      "Droit à l'effacement : demander la suppression de votre compte et de vos données.",
      "Droit d'opposition : refuser certains traitements, notamment la personnalisation.",
      "Droit à la portabilité : recevoir vos données dans un format lisible.",
    ],
  },
  {
    id: "mineurs",
    titre: "Mineurs",
    paragraphes: [
      "Le service n'est pas destiné aux personnes de moins de seize ans. Si nous constatons la création d'un compte par un mineur sans autorisation, celui-ci est supprimé.",
    ],
  },
  {
    id: "modifications",
    titre: "Modifications de cette politique",
    paragraphes: [
      "Cette politique peut évoluer avec le service. Toute modification substantielle vous sera signalée dans l'application ou par e-mail avant son entrée en vigueur.",
      "La date de dernière mise à jour figure en haut de cette page.",
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        breadcrumb="Politique de confidentialité"
        title={
          <>
            Politique de <span className="text-primary">confidentialité</span>
          </>
        }
        description="Vos données vous appartiennent. Voici précisément ce que nous collectons, pourquoi, et ce que vous pouvez exiger de nous."
      />

      <LegalArticle
        miseAJour={MISE_A_JOUR}
        intro="Cette politique explique quelles données personnelles Axì collecte, dans quel but, avec qui elles sont partagées et quels sont vos droits. Elle est rédigée pour être lue, pas pour être subie."
        sections={SECTIONS}
      />

      <CTASection
        title="Une question sur vos données ?"
        description="Écrivez-nous : nous répondons à chaque demande d'accès, de rectification ou de suppression."
        primaryLabel="Nous contacter"
        primaryHref="/contact"
        secondaryLabel="Termes et conditions"
        secondaryHref="/conditions"
      />
    </>
  );
}
