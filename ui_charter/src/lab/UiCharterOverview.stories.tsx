import type { Meta, StoryObj } from '@storybook/react-vite';
import { UiCharterOverview } from './UiCharterOverview';

const meta = {
  title: 'Lab/Overview',
  component: UiCharterOverview,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof UiCharterOverview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
