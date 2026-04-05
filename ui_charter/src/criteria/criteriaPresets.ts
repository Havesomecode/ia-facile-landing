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
    summary: 'La version la plus proche de la vision actuelle: structure nette, surfaces ouvertes, geometrie carree, ton calme.',
    selection: buildSelection(),
  },
  {
    slug: 'editorial-lift',
    title: 'Editorial lift',
    summary: 'Garde la structure calme mais accepte davantage de respiration editoriale et une presence typographique plus marquee.',
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
    summary: 'La version la plus institutionnelle et lisible, plus structuree que theatrale, avec un ton de confiance fonctionnelle.',
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
];

export const defaultCriteriaSelection = criteriaPresets[0].selection;
