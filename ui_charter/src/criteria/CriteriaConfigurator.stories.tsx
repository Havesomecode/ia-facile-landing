import type { Meta, StoryObj } from '@storybook/react-vite';
import { CriteriaConfiguratorPage, type CriteriaConfiguratorPageProps } from './CriteriaConfiguratorPage';
import { criteriaPresets } from './criteriaPresets';
import { steeringCriteria } from './criteriaData';

function argsFromPreset(slug: string): CriteriaConfiguratorPageProps {
  const preset = criteriaPresets.find((entry) => entry.slug === slug);

  if (!preset) {
    return {};
  }

  return {
    composition: preset.selection.composition,
    surfaceLanguage: preset.selection['surface-language'],
    cornersAndGeometry: preset.selection['corners-and-geometry'],
    typography: preset.selection.typography,
    colorAndContrast: preset.selection['color-and-contrast'],
    rhythmAndSpacing: preset.selection['rhythm-and-spacing'],
    hierarchyAndSignposting: preset.selection['hierarchy-and-signposting'],
    imageryAndIllustration: preset.selection['imagery-and-illustration'],
    ctaLanguageAndShape: preset.selection['cta-language-and-shape'],
    motionAndInteractionFeel: preset.selection['motion-and-interaction-feel'],
  };
}

const fitOptions = ['strong', 'medium', 'weak'] as const;

function getCriterion(slug: string) {
  const criterion = steeringCriteria.find((entry) => entry.slug === slug);

  if (!criterion) {
    throw new Error(`Unknown criterion: ${slug}`);
  }

  return criterion;
}

function fitControl(slug: string) {
  const criterion = getCriterion(slug);

  return {
    type: {
      name: 'enum',
      value: [...fitOptions],
    },
    control: {
      type: 'select',
      labels: Object.fromEntries(criterion.options.map((option) => [option.fit, option.name])),
    },
    options: fitOptions,
    description: criterion.question,
    table: {
      type: {
        summary: 'strong | medium | weak',
      },
      defaultValue: {
        summary: 'strong',
      },
    },
  } as const;
}

function presetStory(slug: string): Story {
  const preset = criteriaPresets.find((entry) => entry.slug === slug);

  if (!preset) {
    throw new Error(`Unknown preset: ${slug}`);
  }

  return {
    args: argsFromPreset(slug),
    parameters: {
      docs: {
        description: {
          story: preset.summary,
        },
      },
    },
  };
}

const meta = {
  title: 'Criteria/Configurator',
  render: (args: CriteriaConfiguratorPageProps) => <CriteriaConfiguratorPage {...args} />,
  parameters: {
    layout: 'fullscreen',
    options: {
      showPanel: false,
    },
    controls: {
      expanded: true,
    },
  },
  args: argsFromPreset('vision-core'),
  argTypes: {
    composition: fitControl('composition'),
    surfaceLanguage: fitControl('surface-language'),
    cornersAndGeometry: fitControl('corners-and-geometry'),
    typography: fitControl('typography'),
    colorAndContrast: fitControl('color-and-contrast'),
    rhythmAndSpacing: fitControl('rhythm-and-spacing'),
    hierarchyAndSignposting: fitControl('hierarchy-and-signposting'),
    imageryAndIllustration: fitControl('imagery-and-illustration'),
    ctaLanguageAndShape: fitControl('cta-language-and-shape'),
    motionAndInteractionFeel: fitControl('motion-and-interaction-feel'),
  },
} satisfies Meta<CriteriaConfiguratorPageProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
};

export const VisionCore: Story = presetStory('vision-core');

export const EditorialLift: Story = presetStory('editorial-lift');

export const ServiceClarity: Story = presetStory('service-clarity');

export const StructuredEditorialAuthority: Story = presetStory('structured-editorial-authority');

export const NoNonsenseServiceDesk: Story = presetStory('no-nonsense-service-desk');

export const WarmButDisciplined: Story = presetStory('warm-but-disciplined');

export const PourLesNulsReference: Story = presetStory('pour-les-nuls-reference');

export const SoftStartupRelapse: Story = presetStory('soft-startup-relapse');
