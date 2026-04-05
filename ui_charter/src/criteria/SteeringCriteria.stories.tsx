import type { Meta, StoryObj } from '@storybook/react-vite';
import { CriteriaReviewPage } from './CriteriaReviewPage';
import { steeringCriteria } from './criteriaData';

const meta = {
  title: 'Criteria/Review',
  component: CriteriaReviewPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CriteriaReviewPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Composition: Story = {
  args: {
    criterion: steeringCriteria.find((criterion) => criterion.slug === 'composition')!,
  },
};

export const SurfaceLanguage: Story = {
  args: {
    criterion: steeringCriteria.find((criterion) => criterion.slug === 'surface-language')!,
  },
};

export const CornersAndGeometry: Story = {
  args: {
    criterion: steeringCriteria.find((criterion) => criterion.slug === 'corners-and-geometry')!,
  },
};

export const Typography: Story = {
  args: {
    criterion: steeringCriteria.find((criterion) => criterion.slug === 'typography')!,
  },
};

export const ColorAndContrast: Story = {
  args: {
    criterion: steeringCriteria.find((criterion) => criterion.slug === 'color-and-contrast')!,
  },
};

export const RhythmAndSpacing: Story = {
  args: {
    criterion: steeringCriteria.find((criterion) => criterion.slug === 'rhythm-and-spacing')!,
  },
};

export const HierarchyAndSignposting: Story = {
  args: {
    criterion: steeringCriteria.find((criterion) => criterion.slug === 'hierarchy-and-signposting')!,
  },
};

export const ImageryAndIllustration: Story = {
  args: {
    criterion: steeringCriteria.find((criterion) => criterion.slug === 'imagery-and-illustration')!,
  },
};

export const CtaLanguageAndShape: Story = {
  args: {
    criterion: steeringCriteria.find((criterion) => criterion.slug === 'cta-language-and-shape')!,
  },
};

export const MotionAndInteractionFeel: Story = {
  args: {
    criterion: steeringCriteria.find((criterion) => criterion.slug === 'motion-and-interaction-feel')!,
  },
};
