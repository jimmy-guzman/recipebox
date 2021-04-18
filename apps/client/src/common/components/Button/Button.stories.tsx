import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'client/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>I am an Button!</Button>
)

export const Primary = Template.bind({})
