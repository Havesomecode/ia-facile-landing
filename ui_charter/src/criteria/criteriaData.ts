export type CriterionOption = {
  name: string;
  description: string;
  fit: 'strong' | 'medium' | 'weak';
};

export type CriterionFit = CriterionOption['fit'];

export type SteeringCriterion = {
  slug: string;
  title: string;
  question: string;
  whyItMatters: string;
  reviewPoints: string[];
  goodSignals: string[];
  avoid: string[];
  currentDirection: string;
  currentDecision: string;
  options: CriterionOption[];
};

export const steeringCriteria: SteeringCriterion[] = [
  {
    slug: 'composition',
    title: 'Composition',
    question: 'Does the page feel structured in a specific way, or just stacked?',
    whyItMatters:
      "IA Facile has to reassure, explain, and qualify demand quickly. Composition decides whether the page feels like a guided document or another generic marketing template.",
    reviewPoints: ['overall page architecture', 'hero layout', 'section transitions', 'asymmetry vs symmetry', 'top-to-bottom reading path'],
    goodSignals: ['clear structure', 'calm progression', 'visible organization', 'not a centered SaaS stack'],
    avoid: ['centered hero with stacked boxes', 'interchangeable section blocks', 'soft floating panels', 'decorative asymmetry with no informational role'],
    currentDirection:
      'Use a linear, signposted, section-led composition with a split hero and ruled bands. More guided document, less marketing template.',
    currentDecision:
      'Base the architecture on calm-public-service-clarity, keep the hero split, and use section labels plus horizontal banding to orient the page.',
    options: [
      {
        name: 'Linear signposted bands',
        description: 'Strongest option. Hero split, then horizontal guided sections with clear labels and explicit roles.',
        fit: 'strong',
      },
      {
        name: 'Editorial asymmetry',
        description: 'Useful secondary influence. More tension and typographic rhythm, but it must still read clearly top to bottom.',
        fit: 'medium',
      },
      {
        name: 'Soft modular stacking',
        description: 'The direction to reject. This collapses back into generic landing-page composition.',
        fit: 'weak',
      },
    ],
  },
  {
    slug: 'surface-language',
    title: 'Surface Language',
    question: 'What creates separation: boxes, rules, backgrounds, spacing, or type?',
    whyItMatters:
      'Surface logic determines whether the page feels like a calm guide or a pile of interchangeable components.',
    reviewPoints: ['container usage', 'border behavior', 'shadow usage', 'filled panels vs open layout'],
    goodSignals: ['sparse surfaces', 'rules and borders over shadows', 'sections that breathe', 'low dependence on boxed cards'],
    avoid: ['card-inside-card hierarchy', 'decorative panels with no structural reason', 'shadow-led separation'],
    currentDirection:
      'Prefer ruled separation, open layout, and a small number of purposeful anchored panels rather than card stacks.',
    currentDecision:
      'Calm-public-service-clarity is closest to target. Reassuring-editorial can contribute more open spacing, but warm-modern-guidance is currently too panel-heavy and soft.',
    options: [
      {
        name: 'Ruled and open',
        description: 'Sections are separated mostly by lines, spacing, and typography. Best fit for clarity and confidence.',
        fit: 'strong',
      },
      {
        name: 'Selective anchored panels',
        description: 'A small number of panels can work for summaries or CTAs if they justify their presence.',
        fit: 'medium',
      },
      {
        name: 'Rounded card systems',
        description: 'Too close to generic SaaS UI and weakens the desired adult specificity.',
        fit: 'weak',
      },
    ],
  },
  {
    slug: 'corners-and-geometry',
    title: 'Corners And Geometry',
    question: 'Should the UI feel squared, lightly softened, or rounded?',
    whyItMatters:
      'Geometry quickly communicates whether the interface is strict, soft, product-like, or institutional.',
    reviewPoints: ['panel radius', 'button radius', 'input radius', 'strict vs soft feeling'],
    goodSignals: ['more squared', 'consistent geometry', 'restraint rather than softness'],
    avoid: ['large universal radius', 'pill overload', 'soft rounded panels everywhere'],
    currentDirection:
      'The geometry should lean squared with only slight softening where needed for comfort.',
    currentDecision:
      'This is one of the clearest preferences already: reduce rounded softness across the system and keep corners disciplined.',
    options: [
      {
        name: 'Squared baseline',
        description: 'Small radii or nearly square edges create organization and confidence.',
        fit: 'strong',
      },
      {
        name: 'Lightly softened',
        description: 'Can work selectively on buttons or summary panels, but should not dominate the UI.',
        fit: 'medium',
      },
      {
        name: 'Rounded-friendly',
        description: 'Feels too soft and generic for the current IA Facile direction.',
        fit: 'weak',
      },
    ],
  },
  {
    slug: 'typography',
    title: 'Typography',
    question: 'Does the page feel adult, calm, and specific through type alone?',
    whyItMatters:
      'Typography is one of the main sources of dignity, trust, and specificity for a content-led landing page.',
    reviewPoints: ['headline personality', 'body readability', 'serif vs sans balance', 'label style', 'line length'],
    goodSignals: ['typographic dignity', 'strong readability', 'editorial seriousness without luxury theatre'],
    avoid: ['generic UI sans everywhere', 'ornamental luxury type', 'playful beginner fonts'],
    currentDirection:
      'Keep the clarity of the calm direction, but borrow editorial dignity from reassuring-editorial.',
    currentDecision:
      'Use type to carry the adult tone. Serif or editorial accent is welcome in large headings if the overall reading remains clean and sober.',
    options: [
      {
        name: 'Sans foundation with editorial accent',
        description: 'Likely the best balance: readable body text with a more dignified display voice.',
        fit: 'strong',
      },
      {
        name: 'Pure public-service sans',
        description: 'Very clear, but it risks losing distinctiveness if left entirely neutral.',
        fit: 'medium',
      },
      {
        name: 'Luxury editorial serif system',
        description: 'Too distant and too premium for the audience and use case.',
        fit: 'weak',
      },
    ],
  },
  {
    slug: 'color-and-contrast',
    title: 'Color And Contrast',
    question: 'Does color create trust and specificity, or just atmosphere?',
    whyItMatters:
      'Color can either structure the page and support trust, or blur it into mood without enough precision.',
    reviewPoints: ['background tone', 'accent usage', 'contrast level', 'whether color supports hierarchy'],
    goodSignals: ['warm neutrals', 'restrained accents', 'clear grounded contrast'],
    avoid: ['fade-heavy atmospheres', 'startup gradients', 'mood that weakens legibility'],
    currentDirection:
      'Reduce fades and increase grounded contrast. Color should support organization more than ambience.',
    currentDecision:
      'Keep warm neutrals and calm accents, but move away from atmospheric fades and soft haze as primary character.',
    options: [
      {
        name: 'Warm neutral base + disciplined accent',
        description: 'Best fit. Feels calm, adult, and readable without drifting toward startup gloss.',
        fit: 'strong',
      },
      {
        name: 'Public-service tint blocks',
        description: 'Useful for sectioning if used sparingly and structurally.',
        fit: 'medium',
      },
      {
        name: 'Atmospheric fade field',
        description: 'Currently rejected because it softens structure and specificity.',
        fit: 'weak',
      },
    ],
  },
  {
    slug: 'rhythm-and-spacing',
    title: 'Rhythm And Spacing',
    question: 'Does the page breathe intentionally, or just use default padding?',
    whyItMatters:
      'Spacing controls seriousness. Too open and the page feels vague; too compressed and it feels stressful.',
    reviewPoints: ['section spacing', 'internal module spacing', 'pacing', 'compactness vs openness'],
    goodSignals: ['measured spacing', 'clear beats', 'no bloated template padding'],
    avoid: ['default spacious marketing spacing', 'random density changes', 'crowded component stacking'],
    currentDirection:
      'Keep a moderately dense rhythm: enough information to feel serious, enough air to feel calm.',
    currentDecision:
      'The calm direction sets the best baseline; future iterations should refine pacing rather than dramatically open or compress it.',
    options: [
      {
        name: 'Measured documentary rhythm',
        description: 'Consistent section spacing with clear beats and no inflated emptiness.',
        fit: 'strong',
      },
      {
        name: 'Editorial breathing pockets',
        description: 'Useful when paired with typographic emphasis, but it must not weaken momentum.',
        fit: 'medium',
      },
      {
        name: 'Template padding everywhere',
        description: 'Feels generic and removes structural intention.',
        fit: 'weak',
      },
    ],
  },
  {
    slug: 'hierarchy-and-signposting',
    title: 'Hierarchy And Signposting',
    question: 'Can a visitor tell where they are and what each section does immediately?',
    whyItMatters:
      'IA Facile needs orientation. Signposting is part of the reassurance promise, not just an information design choice.',
    reviewPoints: ['labels', 'headings', 'content grouping', 'meaning progression'],
    goodSignals: ['strong orientation', 'obvious section roles', 'useful labels without clutter'],
    avoid: ['anonymous sections', 'weak transitions', 'labels that feel decorative rather than functional'],
    currentDirection:
      'Lean into explicit signposting. This is one of the strongest aspects of calm-public-service-clarity.',
    currentDecision:
      'Section labels and content grouping should be clear enough that a user can understand the page skeleton at a glance.',
    options: [
      {
        name: 'Explicit labelled sections',
        description: 'Best fit. Supports calm progression and helps the page feel guided rather than promotional.',
        fit: 'strong',
      },
      {
        name: 'Soft editorial hints',
        description: 'Can add elegance, but should not replace explicit orientation.',
        fit: 'medium',
      },
      {
        name: 'Implicit flow only',
        description: 'Too ambiguous for this audience and this validation goal.',
        fit: 'weak',
      },
    ],
  },
  {
    slug: 'imagery-and-illustration',
    title: 'Imagery And Illustration',
    question: 'Does imagery clarify the message, or just decorate it?',
    whyItMatters:
      'Imagery can reduce psychological distance, but it can also quickly turn into generic startup decoration.',
    reviewPoints: ['need for imagery', 'diagrammatic elements', 'editorial realism', 'abstract visual support'],
    goodSignals: ['useful visual explanation', 'minimal decorative noise', 'supportive diagrams or grounded visuals'],
    avoid: ['startup blobs', 'soft conceptual fades', 'illustration systems that infantilize'],
    currentDirection:
      'Use imagery only where it clarifies or anchors. Decorative atmosphere is not enough.',
    currentDecision:
      'The current baseline should stay very restrained. If imagery is added, it should behave like a visual aid, not a mood layer.',
    options: [
      {
        name: 'Minimal diagrammatic support',
        description: 'Most aligned with the current direction because it helps explain without adding noise.',
        fit: 'strong',
      },
      {
        name: 'Light editorial realism',
        description: 'Potentially useful later, but it needs careful sourcing and should stay secondary.',
        fit: 'medium',
      },
      {
        name: 'Atmospheric abstraction',
        description: 'Currently too close to the rejected fade-heavy direction.',
        fit: 'weak',
      },
    ],
  },
  {
    slug: 'cta-language-and-shape',
    title: 'CTA Language And Shape',
    question: 'Do the actions feel clear and trustworthy, or too product-like?',
    whyItMatters:
      'The CTA is where reassurance becomes action. Its wording and shape should support trust rather than create pressure.',
    reviewPoints: ['CTA wording', 'primary/secondary balance', 'button styling', 'fit with page tone'],
    goodSignals: ['simple invitation', 'no aggressive conversion language', 'shape aligned with overall geometry'],
    avoid: ['performance language', 'over-productized buttons', 'soft default pills if they conflict with geometry'],
    currentDirection:
      'The action should read like an invitation into clarity, not a push into performance.',
    currentDecision:
      'Keep CTA language calm and specific. Revisit button geometry to align more closely with the squared baseline.',
    options: [
      {
        name: 'Calm invitation',
        description: 'Best fit. Simple, trustworthy, and aligned with the IA Facile promise.',
        fit: 'strong',
      },
      {
        name: 'Structured utility actions',
        description: 'Can work well if labels stay plain and useful rather than product-like.',
        fit: 'medium',
      },
      {
        name: 'Friendly pill CTA system',
        description: 'Too soft if it reintroduces the rounded language the current review rejected.',
        fit: 'weak',
      },
    ],
  },
  {
    slug: 'motion-and-interaction-feel',
    title: 'Motion And Interaction Feel',
    question: 'If motion exists, does it increase clarity or just add polish?',
    whyItMatters:
      'Motion can quietly reinforce hierarchy, but the wrong motion makes the page feel softer and less specific.',
    reviewPoints: ['transitions', 'hover behavior', 'reveal patterns', 'movement intensity'],
    goodSignals: ['subtle', 'stable', 'confidence-building'],
    avoid: ['drift', 'float', 'atmospheric soft movement', 'novelty motion'],
    currentDirection:
      'Motion should be almost invisible and only exist where it reinforces orientation or interaction confidence.',
    currentDecision:
      'Do not use motion as atmosphere. Keep any future interaction behavior minimal, squared, and steady.',
    options: [
      {
        name: 'Structural micro-motion',
        description: 'Subtle transitions on focus, reveal, or anchor states only. Best fit.',
        fit: 'strong',
      },
      {
        name: 'Soft polish motion',
        description: 'Sometimes acceptable, but it can quickly dilute the structural tone.',
        fit: 'medium',
      },
      {
        name: 'Atmospheric movement',
        description: 'Directly conflicts with the current preference for clarity and organization.',
        fit: 'weak',
      },
    ],
  },
];
