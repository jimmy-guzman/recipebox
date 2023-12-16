import { Footer } from '@recipe-box/components';
import { type Meta, type Story } from '@storybook/react';

export default {
  title: 'components/molecules/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
