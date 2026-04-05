import type { Meta, StoryObj } from '@storybook/react-vite';
import { CriteriaConfiguratorPage } from './CriteriaConfiguratorPage';

const meta = {
  title: 'Criteria/Configurator',
  component: CriteriaConfiguratorPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CriteriaConfiguratorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Website: Story = {};
