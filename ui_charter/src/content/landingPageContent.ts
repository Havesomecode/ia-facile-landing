export type LandingStorySection = {
  title: string;
  body: string;
  supportingPoints?: string[];
};

export type LandingStoryContent = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  reassurance: LandingStorySection;
  firstStep: LandingStorySection;
  trust: LandingStorySection;
  closingCta: LandingStorySection;
};

export const iaFacileDemoContent: LandingStoryContent = {
  eyebrow: 'IA Facile',
  headline: "Si vous ne savez pas par ou commencer avec l'IA, vous etes au bon endroit.",
  subheadline:
    "IA Facile vous aide a comprendre l'IA simplement et a commencer a l'utiliser dans la vie de tous les jours, sans jargon, sans pression, et sans vous sentir deja en retard.",
  primaryCta: 'Recevoir les premiers pas',
  secondaryCta: 'Comprendre la direction visuelle',
  reassurance: {
    title: "L'IA n'a pas besoin de rester opaque.",
    body:
      "Le projet s'adresse aux adultes qui sentent que l'IA compte, mais qui n'ont pas envie d'entrer dans un univers technique, jugeant ou trop rapide.",
    supportingPoints: [
      'Ton rassurant avant toute promesse de performance',
      'Clarte visuelle avant accumulation de composants',
      'Positionnement adulte, accessible, non paternaliste',
    ],
  },
  firstStep: {
    title: 'Une premiere marche simple et utile.',
    body:
      "Chaque direction visuelle doit montrer comment l'IA peut devenir plus comprehensible, plus proche du quotidien, et plus simple a essayer sans devoir tout maitriser d'un coup.",
    supportingPoints: [
      'Usage du quotidien et premiers gestes concrets',
      'Introduction progressive plutot que promesse de maitrise',
      'Clarte editoriale plutot que carte marketing interchangeable',
    ],
  },
  trust: {
    title: "Pourquoi cette approche est differente.",
    body:
      "Le labo compare des directions visuelles qui evitent les codes SaaS generiques, les cartes arrondies empilees et les signaux d'intimidation propres aux pages IA classiques.",
    supportingPoints: [
      'Moins de surfaces imbriquees, plus de rythme',
      'Plus de hierarchie typographique, moins de decoration',
      'Une identite qui accompagne sans infantiliser',
    ],
  },
  closingCta: {
    title: 'Choisir une direction avant de figer un produit.',
    body:
      "Le but du ui_charter est de rendre les hypotheses visuelles visibles, comparables et discutables avant de construire la vraie landing page.",
    supportingPoints: ['Storybook comme galerie de theses visuelles', 'Comparaison a contenu constant'],
  },
};
