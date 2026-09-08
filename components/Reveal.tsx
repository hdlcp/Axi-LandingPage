"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "up" | "down" | "left" | "right" | "scale" | "fade";

type RevealProps = {
  children: ReactNode;
  /** Direction de l'apparition. */
  variant?: Variant;
  /** Retard en millisecondes avant l'apparition. */
  delay?: number;
  className?: string;
};

/**
 * Révèle son contenu quand il entre dans le viewport.
 * Les styles vivent dans globals.css (.reveal / .is-visible) et sont
 * automatiquement neutralisés si l'utilisateur préfère un mouvement réduit.
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Pas d'IntersectionObserver (très vieux navigateur) : on affiche tout,
    // au tour de rendu suivant pour éviter un setState synchrone.
    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal reveal-${variant}${visible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
