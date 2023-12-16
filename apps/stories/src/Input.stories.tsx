import { type InputProps } from '@recipe-box/components';
import { Input } from '@recipe-box/components';
import { type Meta, type Story } from '@storybook/react';

export default {
  title: 'components/atoms/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
  <Input value='I am an Input!' {...args} />
);

export const Primary = Template.bind({});
