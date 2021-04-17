import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Input, InputProps } from './Input'

export default {
  title: 'client/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => (
  <Input value='I am an Input!' {...args} />
)

export const Primary = Template.bind({})
