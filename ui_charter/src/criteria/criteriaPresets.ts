import { steeringCriteria, type CriterionFit } from './criteriaData';

export type CriteriaSelection = Record<string, CriterionFit>;

export type CriteriaPreset = {
  slug: string;
  title: string;
  summary: string;
  selection: CriteriaSelection;
};

function buildSelection(overrides: Partial<CriteriaSelection> = {}): CriteriaSelection {
  return steeringCriteria.reduce<CriteriaSelection>((selection, criterion) => {
    selection[criterion.slug] = overrides[criterion.slug] ?? 'strong';
    return selection;
  }, {});
}

export const criteriaPresets: CriteriaPreset[] = [
  {
    slug: 'vision-core',
    title: 'Vision core',
    summary:
      'House view. Push the anti-generic baseline: ruled structure, open surfaces, squared geometry, restrained warmth, and no startup softness.',
    selection: buildSelection(),
  },
  {
    slug: 'editorial-lift',
    title: 'Editorial lift',
    summary:
      'Keep the calm structure, but let typography and rhythm carry more adult presence. Editorial dignity without drifting into luxury theatre.',
    selection: buildSelection({
      'composition': 'medium',
      'surface-language': 'strong',
      'corners-and-geometry': 'strong',
      'typography': 'strong',
      'color-and-contrast': 'strong',
      'rhythm-and-spacing': 'medium',
      'hierarchy-and-signposting': 'strong',
      'imagery-and-illustration': 'medium',
      'cta-language-and-shape': 'strong',
      'motion-and-interaction-feel': 'strong',
    }),
  },
  {
    slug: 'service-clarity',
    title: 'Service clarity',
    summary:
      'Lean harder into public-service clarity. More guided document than brand statement, with confidence built through organization and signposting.',
    selection: buildSelection({
      'composition': 'strong',
      'surface-language': 'strong',
      'corners-and-geometry': 'strong',
      'typography': 'medium',
      'color-and-contrast': 'medium',
      'rhythm-and-spacing': 'strong',
      'hierarchy-and-signposting': 'strong',
      'imagery-and-illustration': 'strong',
      'cta-language-and-shape': 'medium',
      'motion-and-interaction-feel': 'strong',
    }),
  },
  {
    slug: 'structured-editorial-authority',
    title: 'Structured editorial authority',
    summary:
      'A sharper thesis: make the page feel like a trusted brief, not a marketing page. Strong typographic dignity, but the structure still does the work.',
    selection: buildSelection({
      'composition': 'strong',
      'surface-language': 'strong',
      'corners-and-geometry': 'strong',
      'typography': 'strong',
      'color-and-contrast': 'strong',
      'rhythm-and-spacing': 'medium',
      'hierarchy-and-signposting': 'strong',
      'imagery-and-illustration': 'medium',
      'cta-language-and-shape': 'strong',
      'motion-and-interaction-feel': 'strong',
    }),
  },
  {
    slug: 'no-nonsense-service-desk',
    title: 'No-nonsense service desk',
    summary:
      'Push the functional reading further. Less editorial romance, more immediate orientation, operational calm, and grounded usefulness.',
    selection: buildSelection({
      'composition': 'strong',
      'surface-language': 'strong',
      'corners-and-geometry': 'strong',
      'typography': 'medium',
      'color-and-contrast': 'medium',
      'rhythm-and-spacing': 'strong',
      'hierarchy-and-signposting': 'strong',
      'imagery-and-illustration': 'strong',
      'cta-language-and-shape': 'medium',
      'motion-and-interaction-feel': 'strong',
    }),
  },
  {
    slug: 'warm-but-disciplined',
    title: 'Warm but disciplined',
    summary:
      'Allow some softness back in, but on a leash. Warmth can enter through type, color, and rhythm, not through generic rounded-card behavior.',
    selection: buildSelection({
      'composition': 'medium',
      'surface-language': 'medium',
      'corners-and-geometry': 'medium',
      'typography': 'strong',
      'color-and-contrast': 'strong',
      'rhythm-and-spacing': 'medium',
      'hierarchy-and-signposting': 'strong',
      'imagery-and-illustration': 'medium',
      'cta-language-and-shape': 'strong',
      'motion-and-interaction-feel': 'medium',
    }),
  },
  {
    slug: 'pour-les-nuls-reference',
    title: 'Pour les Nuls reference',
    summary:
      'Contrast reference: more didactic, more mass-market, more demonstrative. Useful when testing what a very beginner-friendly direction gains, and what adult calm it gives up.',
    selection: buildSelection({
      'composition': 'strong',
      'surface-language': 'medium',
      'corners-and-geometry': 'medium',
      'typography': 'medium',
      'color-and-contrast': 'medium',
      'rhythm-and-spacing': 'medium',
      'hierarchy-and-signposting': 'strong',
      'imagery-and-illustration': 'medium',
      'cta-language-and-shape': 'medium',
      'motion-and-interaction-feel': 'medium',
    }),
  },
  {
    slug: 'soft-startup-relapse',
    title: 'Soft startup relapse',
    summary:
      'Deliberate anti-reference. Use this to make the failure mode obvious: rounded panels, atmospheric softness, generic conversion language, and weaker structure.',
    selection: buildSelection({
      'composition': 'weak',
      'surface-language': 'weak',
      'corners-and-geometry': 'weak',
      'typography': 'weak',
      'color-and-contrast': 'weak',
      'rhythm-and-spacing': 'weak',
      'hierarchy-and-signposting': 'medium',
      'imagery-and-illustration': 'weak',
      'cta-language-and-shape': 'weak',
      'motion-and-interaction-feel': 'weak',
    }),
  },
];

export const defaultCriteriaSelection = criteriaPresets[0].selection;
