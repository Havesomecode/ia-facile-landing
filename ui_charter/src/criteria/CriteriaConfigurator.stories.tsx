import type { Meta, StoryObj } from '@storybook/react-vite';
import { CriteriaConfiguratorPage, type CriteriaConfiguratorPageProps } from './CriteriaConfiguratorPage';
import { criteriaPresets } from './criteriaPresets';

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

const fitControl = {
  control: 'inline-radio',
  options: ['strong', 'medium', 'weak'],
} as const;

const meta = {
  title: 'Criteria/Configurator',
  component: CriteriaConfiguratorPage,
  parameters: {
    layout: 'fullscreen',
  },
  args: argsFromPreset('vision-core'),
  argTypes: {
    composition: fitControl,
    surfaceLanguage: fitControl,
    cornersAndGeometry: fitControl,
    typography: fitControl,
    colorAndContrast: fitControl,
    rhythmAndSpacing: fitControl,
    hierarchyAndSignposting: fitControl,
    imageryAndIllustration: fitControl,
    ctaLanguageAndShape: fitControl,
    motionAndInteractionFeel: fitControl,
  },
} satisfies Meta<typeof CriteriaConfiguratorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
};

export const VisionCore: Story = {
  args: argsFromPreset('vision-core'),
};

export const EditorialLift: Story = {
  args: argsFromPreset('editorial-lift'),
};

export const ServiceClarity: Story = {
  args: argsFromPreset('service-clarity'),
};

export const PourLesNulsReference: Story = {
  args: argsFromPreset('pour-les-nuls-reference'),
};
