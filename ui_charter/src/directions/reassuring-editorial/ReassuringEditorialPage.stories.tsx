import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReassuringEditorialPage } from './ReassuringEditorialPage';

const meta = {
  title: 'Directions/Reassuring Editorial',
  component: ReassuringEditorialPage,
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [390, 768, 1440] },
  },
} satisfies Meta<typeof ReassuringEditorialPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
