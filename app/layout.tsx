import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://axi.bj"),
  title: {
    default: "Axì — Le marché digital de proximité",
    template: "%s | Axì",
  },
  description:
    "Retrouvez les vendeuses, PME, artisans et services de proximité autour de vous. Parcourez les stands, commandez, réservez et discutez directement — partout au Bénin.",
  keywords: [
    "Axi",
    "marché digital",
    "Bénin",
    "artisans",
    "PME",
    "services de proximité",
    "stand digital",
  ],
  icons: {
    icon: "/AxiLogo.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Axì",
    title: "Axì — Le marché digital de proximité",
    description:
      "Le marché digital où chacun retrouve les services autour de lui, comme s'il y était.",
    images: ["/HeroImage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased flex min-h-screen flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-black focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu principal
        </a>

        <Navbar />

        <main id="contenu" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
