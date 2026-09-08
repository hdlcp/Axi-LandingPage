import Reveal from "./Reveal";

export type LegalSection = {
  id: string;
  titre: string;
  /** Paragraphes et listes à puces (tableau de chaînes). */
  paragraphes?: string[];
  puces?: string[];
};

type LegalArticleProps = {
  miseAJour: string;
  intro: string;
  sections: LegalSection[];
};

/**
 * Mise en page commune aux pages légales : sommaire ancré à gauche
 * sur grand écran, contenu à droite. Angles droits, comme le reste du site.
 */
export default function LegalArticle({
  miseAJour,
  intro,
  sections,
}: LegalArticleProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
        {/* Sommaire */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="border-2 border-black bg-gray-50 p-6">
            <span className="eyebrow text-black/60">Sommaire</span>
            <nav aria-label="Sommaire du document" className="mt-4">
              <ol className="space-y-2">
                {sections.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex gap-3 font-sans text-sm text-gray-700 transition-colors hover:text-black"
                    >
                      <span className="font-semibold text-gray-400 transition-colors group-hover:text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="group-hover:underline">{section.titre}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <p className="mt-4 border-l-4 border-primary pl-4 font-sans text-xs text-gray-500">
            Dernière mise à jour : {miseAJour}
          </p>
        </aside>

        {/* Contenu */}
        <div>
          <Reveal>
            <p className="border-2 border-black bg-primary p-6 font-sans leading-relaxed text-black">
              {intro}
            </p>
          </Reveal>

          <div className="mt-12 space-y-12">
            {sections.map((section, i) => (
              <Reveal key={section.id} delay={40}>
                <article id={section.id} className="scroll-mt-28">
                  <div className="flex items-baseline gap-4">
                    <span className="font-heading text-3xl font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="heading-md">{section.titre}</h2>
                  </div>

                  <div className="mt-4 space-y-4 border-l-2 border-gray-200 pl-6">
                    {section.paragraphes?.map((paragraphe) => (
                      <p
                        key={paragraphe.slice(0, 40)}
                        className="font-sans leading-relaxed text-gray-700"
                      >
                        {paragraphe}
                      </p>
                    ))}

                    {section.puces && (
                      <ul className="space-y-2">
                        {section.puces.map((puce) => (
                          <li key={puce} className="flex gap-3">
                            <span
                              className="mt-2 h-2 w-2 shrink-0 bg-primary"
                              aria-hidden
                            />
                            <span className="font-sans leading-relaxed text-gray-700">
                              {puce}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
