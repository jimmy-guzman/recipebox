import { type ButtonProps } from '@recipe-box/components';
import { Button } from '@recipe-box/components';
import { type Meta, type Story } from '@storybook/react';

export default {
  title: 'components/atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>I am an Button!</Button>
);

export const Primary = Template.bind({});
