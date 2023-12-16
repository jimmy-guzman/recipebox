import { type LinkProps } from '@recipe-box/components';
import { Link } from '@recipe-box/components';
import { type Meta, type Story } from '@storybook/react';

export default {
  title: 'components/atoms/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <Link {...args}>I am an Link!</Link>
);

export const Primary = Template.bind({});
