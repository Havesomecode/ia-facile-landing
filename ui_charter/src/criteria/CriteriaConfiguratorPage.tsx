import { useState } from 'react';
import { iaFacileDemoContent } from '../content/landingPageContent';
import { steeringCriteria, type CriterionFit } from './criteriaData';
import { criteriaPresets, defaultCriteriaSelection, type CriteriaSelection } from './criteriaPresets';
import './criteria-configurator.css';

function areSelectionsEqual(left: CriteriaSelection, right: CriteriaSelection) {
  return steeringCriteria.every((criterion) => left[criterion.slug] === right[criterion.slug]);
}

function getCtaCopy(fit: CriterionFit) {
  if (fit === 'medium') {
    return {
      primary: 'Voir le parcours',
      secondary: 'Lire la methode',
    };
  }

  if (fit === 'weak') {
    return {
      primary: 'Demarrer maintenant',
      secondary: 'Voir la plateforme',
    };
  }

  return {
    primary: iaFacileDemoContent.primaryCta,
    secondary: 'Comprendre la promesse',
  };
}

function HeroVisual({ fit }: { fit: CriterionFit }) {
  if (fit === 'medium') {
    return (
      <div className="preview-photo">
        <div className="preview-photo-frame" />
        <div className="preview-photo-caption" />
      </div>
    );
  }

  if (fit === 'weak') {
    return (
      <div className="preview-atmosphere">
        <span className="preview-blob preview-blob--one" />
        <span className="preview-blob preview-blob--two" />
        <span className="preview-blob preview-blob--three" />
      </div>
    );
  }

  return (
    <div className="preview-diagram">
      <div className="preview-diagram-node" />
      <div className="preview-diagram-line" />
      <div className="preview-diagram-node preview-diagram-node--accent" />
      <div className="preview-diagram-line" />
      <div className="preview-diagram-node" />
    </div>
  );
}

function SectionPoints({ points }: { points?: string[] }) {
  if (!points?.length) {
    return null;
  }

  return (
    <ul className="preview-points">
      {points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  );
}

export function CriteriaConfiguratorPage() {
  const [selection, setSelection] = useState<CriteriaSelection>({ ...defaultCriteriaSelection });

  const activePreset = criteriaPresets.find((preset) => areSelectionsEqual(selection, preset.selection)) ?? null;
  const ctaCopy = getCtaCopy(selection['cta-language-and-shape']);

  return (
    <main className="configurator-shell">
      <section className="configurator-intro">
        <div>
          <p className="configurator-kicker">Live demo website</p>
          <h1>Composer une landing page critere par critere</h1>
          <p className="configurator-lead">
            Choisissez une orientation pour chaque critere et regardez comment la landing page change immediatement.
          </p>
        </div>
        <div className="configurator-status">
          <p className="configurator-kicker">Preset actif</p>
          <strong>{activePreset?.title ?? 'Custom mix'}</strong>
          <p>{activePreset?.summary ?? 'Melange manuel pour tester des tensions entre clarte, editorial et tonalite produit.'}</p>
        </div>
      </section>

      <div className="configurator-workspace">
        <aside className="configurator-sidebar">
          <section className="configurator-presets" aria-label="Suggested combinations">
            <div className="configurator-section-heading">
              <p className="configurator-kicker">Suggestions</p>
              <h2>Trois combinaisons proches de la vision</h2>
            </div>
            <div className="configurator-preset-grid">
              {criteriaPresets.map((preset) => (
                <article key={preset.slug} className={`configurator-preset ${activePreset?.slug === preset.slug ? 'is-active' : ''}`}>
                  <div>
                    <p className="configurator-kicker">{preset.slug}</p>
                    <h3>{preset.title}</h3>
                    <p>{preset.summary}</p>
                  </div>
                  <button type="button" onClick={() => setSelection({ ...preset.selection })}>
                    Appliquer
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="configurator-controls" aria-label="Criterion controls">
            <div className="configurator-section-heading">
              <p className="configurator-kicker">Configurations</p>
              <h2>Une commande par critere</h2>
            </div>
            <div className="configurator-control-grid">
              {steeringCriteria.map((criterion) => (
                <article key={criterion.slug} className="configurator-control">
                  <div className="configurator-control-copy">
                    <h3>{criterion.title}</h3>
                    <p>{criterion.currentDirection}</p>
                  </div>
                  <div className="configurator-toggle" role="group" aria-label={criterion.title}>
                    {criterion.options.map((option) => (
                      <button
                        key={option.fit}
                        type="button"
                        className={selection[criterion.slug] === option.fit ? 'is-selected' : ''}
                        onClick={() =>
                          setSelection((currentSelection) => ({
                            ...currentSelection,
                            [criterion.slug]: option.fit,
                          }))
                        }
                      >
                        <span>{option.fit}</span>
                        <small>{option.name}</small>
                      </button>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </aside>

        <section className="configurator-stage">
          <div className="configurator-section-heading">
            <p className="configurator-kicker">Preview</p>
            <h2>Rendu instantane</h2>
          </div>
          <div className="configurator-stage-note">
            <p>La zone de preview reste stable. Faites defiler la landing page dans ce viewport uniquement pour verifier les effets.</p>
          </div>

          <div
            className="configurator-preview"
            data-composition={selection['composition']}
            data-surface-language={selection['surface-language']}
            data-corners-and-geometry={selection['corners-and-geometry']}
            data-typography={selection['typography']}
            data-color-and-contrast={selection['color-and-contrast']}
            data-rhythm-and-spacing={selection['rhythm-and-spacing']}
            data-hierarchy-and-signposting={selection['hierarchy-and-signposting']}
            data-imagery-and-illustration={selection['imagery-and-illustration']}
            data-cta-language-and-shape={selection['cta-language-and-shape']}
            data-motion-and-interaction-feel={selection['motion-and-interaction-feel']}
          >
            <div className="configurator-preview-viewport">
              <div className="preview-site">
                <div className="preview-topbar">
                  <span>{iaFacileDemoContent.eyebrow}</span>
                  <span>Premiers pas</span>
                  <span>Usages</span>
                  <span>Clarte</span>
                </div>

                <section className="preview-hero">
                  <div className="preview-hero-copy">
                    <p className="preview-label">Accueil</p>
                    <h2>{iaFacileDemoContent.headline}</h2>
                    <p className="preview-lead">{iaFacileDemoContent.subheadline}</p>
                    <div className="preview-actions">
                      <button type="button" className="preview-button preview-button--primary">
                        {ctaCopy.primary}
                      </button>
                      <button type="button" className="preview-button preview-button--secondary">
                        {ctaCopy.secondary}
                      </button>
                    </div>
                  </div>

                  <aside className="preview-side-panel">
                    <p className="preview-label">Apercu</p>
                    <p className="preview-side-copy">Une premiere impression de la promesse avant meme de lire tout le contenu.</p>
                    <HeroVisual fit={selection['imagery-and-illustration']} />
                  </aside>
                </section>

                <section className="preview-section">
                  <div className="preview-section-signpost">
                    <p className="preview-label">Pourquoi ici</p>
                  </div>
                  <div className="preview-section-body">
                    <h3>{iaFacileDemoContent.reassurance.title}</h3>
                    <p>{iaFacileDemoContent.reassurance.body}</p>
                    <SectionPoints points={iaFacileDemoContent.reassurance.supportingPoints} />
                  </div>
                </section>

                <section className="preview-section">
                  <div className="preview-section-signpost">
                    <p className="preview-label">Premiere marche</p>
                  </div>
                  <div className="preview-section-body">
                    <h3>{iaFacileDemoContent.firstStep.title}</h3>
                    <p>{iaFacileDemoContent.firstStep.body}</p>
                    <SectionPoints points={iaFacileDemoContent.firstStep.supportingPoints} />
                  </div>
                </section>

                <section className="preview-section">
                  <div className="preview-section-signpost">
                    <p className="preview-label">Difference</p>
                  </div>
                  <div className="preview-section-body preview-section-body--with-aside">
                    <div>
                      <h3>{iaFacileDemoContent.trust.title}</h3>
                      <p>{iaFacileDemoContent.trust.body}</p>
                    </div>
                    <div className="preview-micro-panel">
                      <SectionPoints points={iaFacileDemoContent.trust.supportingPoints} />
                    </div>
                  </div>
                </section>

                <section className="preview-closing">
                  <div>
                    <p className="preview-label">Decision</p>
                    <h3>{iaFacileDemoContent.closingCta.title}</h3>
                    <p>{iaFacileDemoContent.closingCta.body}</p>
                  </div>
                  <div className="preview-closing-actions">
                    <button type="button" className="preview-button preview-button--primary">
                      {ctaCopy.primary}
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
