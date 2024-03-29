import { type TypographyProps } from '@recipe-box/components';
import { Typography } from '@recipe-box/components';
import { type Meta, type Story } from '@storybook/react';

export default {
  title: 'components/atoms/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>I am some typography!</Typography>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = { font: 'secondary' };
