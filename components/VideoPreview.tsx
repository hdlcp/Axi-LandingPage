"use client";

import Image from "next/image";
import { useState } from "react";
import { Play, X } from "lucide-react";

/** Identifiant YouTube de la vidéo de présentation. Vide = pas encore publiée. */
const YOUTUBE_ID = "";

export default function VideoPreview() {
  const [lecture, setLecture] = useState(false);

  const disponible = YOUTUBE_ID.length > 0;

  return (
    <div className="relative mx-auto mt-4 w-full max-w-4xl overflow-hidden border-2 border-black">
      <div className="relative aspect-video w-full bg-gray-200">
        {lecture && disponible ? (
          <>
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
              title="Découvrir Axì, le marché digital de proximité"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
            <button
              type="button"
              onClick={() => setLecture(false)}
              aria-label="Fermer la vidéo"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center border-2 border-black bg-white text-black transition-colors hover:bg-primary"
            >
              <X size={18} aria-hidden />
            </button>
          </>
        ) : (
          <>
            <Image
              src="/clip.jpg"
              alt="Aperçu de la vidéo de présentation d'Axì"
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />

            {/* Voile sombre */}
            <div className="absolute inset-0 bg-black/25" aria-hidden />

            {/* Logo + titre */}
            <div className="absolute left-3 top-3 flex items-center gap-2 md:left-6 md:top-6 md:gap-3">
              <Image
                src="/AxiLogo.png"
                width={50}
                height={50}
                alt=""
                className="h-8 w-8 md:h-12 md:w-12"
              />
              <span className="font-sans text-xs leading-tight text-white sm:text-sm md:text-lg">
                Découvrir Axì, le marché
                <br className="sm:hidden" /> digital de proximité
              </span>
            </div>

            {/* Bouton lecture */}
            <button
              type="button"
              onClick={() => disponible && setLecture(true)}
              disabled={!disponible}
              aria-label={
                disponible
                  ? "Lancer la vidéo de présentation"
                  : "Vidéo de présentation bientôt disponible"
              }
              className="group absolute left-1/2 top-1/2 flex h-16 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-2 border-black bg-red-600 text-white shadow-[6px_6px_0_0_#000] transition-all duration-300 enabled:hover:-translate-x-[calc(50%+4px)] enabled:hover:-translate-y-[calc(50%+4px)] enabled:hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-gray-500 md:h-20 md:w-28"
            >
              <Play
                size={30}
                fill="currentColor"
                className="ml-1 transition-transform duration-300 group-enabled:group-hover:scale-110"
                aria-hidden
              />
            </button>

            {/* Statut */}
            <span className="absolute bottom-3 right-3 border-2 border-black bg-white px-3 py-1.5 font-sans text-xs font-semibold text-black md:bottom-6 md:right-6">
              {disponible ? "Regarder la vidéo" : "Vidéo bientôt disponible"}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
