import { Story, Meta } from '@storybook/react'

import { Input } from './Input'
import { InputProps } from './Input.types'

export default {
  title: 'components/atoms/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => (
  <Input value='I am an Input!' {...args} />
)

export const Primary = Template.bind({})
