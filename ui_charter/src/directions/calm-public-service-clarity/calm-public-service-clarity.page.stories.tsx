import type { Meta, StoryObj } from '@storybook/react-vite';
import { CalmPublicServiceClarityPage } from './calm-public-service-clarity.page';

const meta = {
  title: 'Directions/Calm Public Service Clarity',
  component: CalmPublicServiceClarityPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CalmPublicServiceClarityPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
