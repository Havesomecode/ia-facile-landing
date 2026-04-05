import type { Meta, StoryObj } from '@storybook/react-vite';
import { WarmModernGuidancePage } from './WarmModernGuidancePage';

const meta = {
  title: 'Directions/Warm Modern Guidance',
  component: WarmModernGuidancePage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof WarmModernGuidancePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
