import { iaFacileDemoContent } from '../content/landingPageContent';
import type { CriterionFit } from './criteriaData';
import { criteriaPresets, defaultCriteriaSelection, type CriteriaSelection } from './criteriaPresets';
import './criteria-configurator.css';

export type CriteriaConfiguratorPageProps = {
  composition?: CriterionFit;
  surfaceLanguage?: CriterionFit;
  cornersAndGeometry?: CriterionFit;
  typography?: CriterionFit;
  colorAndContrast?: CriterionFit;
  rhythmAndSpacing?: CriterionFit;
  hierarchyAndSignposting?: CriterionFit;
  imageryAndIllustration?: CriterionFit;
  ctaLanguageAndShape?: CriterionFit;
  motionAndInteractionFeel?: CriterionFit;
};

function areSelectionsEqual(left: CriteriaSelection, right: CriteriaSelection) {
  return Object.entries(left).every(([key, value]) => right[key] === value);
}

function getSelectionFromProps(props: CriteriaConfiguratorPageProps): CriteriaSelection {
  return {
    composition: props.composition ?? defaultCriteriaSelection.composition,
    'surface-language': props.surfaceLanguage ?? defaultCriteriaSelection['surface-language'],
    'corners-and-geometry': props.cornersAndGeometry ?? defaultCriteriaSelection['corners-and-geometry'],
    typography: props.typography ?? defaultCriteriaSelection.typography,
    'color-and-contrast': props.colorAndContrast ?? defaultCriteriaSelection['color-and-contrast'],
    'rhythm-and-spacing': props.rhythmAndSpacing ?? defaultCriteriaSelection['rhythm-and-spacing'],
    'hierarchy-and-signposting':
      props.hierarchyAndSignposting ?? defaultCriteriaSelection['hierarchy-and-signposting'],
    'imagery-and-illustration': props.imageryAndIllustration ?? defaultCriteriaSelection['imagery-and-illustration'],
    'cta-language-and-shape': props.ctaLanguageAndShape ?? defaultCriteriaSelection['cta-language-and-shape'],
    'motion-and-interaction-feel':
      props.motionAndInteractionFeel ?? defaultCriteriaSelection['motion-and-interaction-feel'],
  };
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

export function CriteriaConfiguratorPage(props: CriteriaConfiguratorPageProps) {
  const selection = getSelectionFromProps(props);
  const activePreset = criteriaPresets.find((preset) => areSelectionsEqual(selection, preset.selection)) ?? null;
  const ctaCopy = getCtaCopy(selection['cta-language-and-shape']);

  return (
    <main
      className="configurator-preview"
      data-reference={activePreset?.slug ?? 'custom'}
      data-composition={selection.composition}
      data-surface-language={selection['surface-language']}
      data-corners-and-geometry={selection['corners-and-geometry']}
      data-typography={selection.typography}
      data-color-and-contrast={selection['color-and-contrast']}
      data-rhythm-and-spacing={selection['rhythm-and-spacing']}
      data-hierarchy-and-signposting={selection['hierarchy-and-signposting']}
      data-imagery-and-illustration={selection['imagery-and-illustration']}
      data-cta-language-and-shape={selection['cta-language-and-shape']}
      data-motion-and-interaction-feel={selection['motion-and-interaction-feel']}
    >
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
    </main>
  );
}
