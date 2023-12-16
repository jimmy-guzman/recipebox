import { Instructions } from '@recipe-box/components';
import { type Meta, type Story } from '@storybook/react';

export default {
  title: 'components/molecules/Instructions',
  component: Instructions,
} as Meta;

const Template: Story = (args) => <Instructions {...args} />;

export const Primary = Template.bind({});
