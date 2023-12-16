import { Story, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@recipe-box/components'

export default {
  title: 'components/atoms/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>I am an Button!</Button>
)

export const Primary = Template.bind({})
