"use client";

/**
 * Page d'erreur globale : elle remplace entièrement le layout racine,
 * elle doit donc rendre ses propres <html> et <body>.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
          padding: "24px",
        }}
      >
        <main style={{ maxWidth: "640px", width: "100%" }}>
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#FFBE00",
              fontWeight: 600,
            }}
          >
            Erreur inattendue
          </p>

          <h1
            style={{
              margin: "16px 0 0",
              fontSize: "clamp(28px, 6vw, 44px)",
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            Le stand est momentanément fermé.
          </h1>

          <div
            style={{
              width: "96px",
              height: "6px",
              backgroundColor: "#FFBE00",
              margin: "24px 0",
            }}
          />

          <p style={{ margin: 0, lineHeight: 1.7, color: "#d1d5db" }}>
            Une erreur technique est survenue de notre côté. Vous pouvez
            réessayer&nbsp;; si le problème persiste, écrivez-nous et nous
            interviendrons rapidement.
          </p>

          {error.digest && (
            <p
              style={{
                margin: "16px 0 0",
                fontSize: "12px",
                color: "#6b7280",
              }}
            >
              Code de référence : {error.digest}
            </p>
          )}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginTop: "32px",
            }}
          >
            <button
              type="button"
              onClick={() => reset()}
              style={{
                backgroundColor: "#FFBE00",
                color: "#000",
                border: "2px solid #000",
                padding: "12px 24px",
                fontWeight: 600,
                fontSize: "15px",
                cursor: "pointer",
                borderRadius: 0,
              }}
            >
              Réessayer
            </button>

            {/* Un <a> natif est volontaire : global-error remplace tout le
                layout, le routeur client n'est pas disponible ici. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #fff",
                padding: "12px 24px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                borderRadius: 0,
              }}
            >
              Retour à l&apos;accueil
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
