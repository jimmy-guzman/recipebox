import { Story, Meta } from '@storybook/react'

import { Spinner } from './Spinner'

export default {
  title: 'components/atoms/Spinner',
  component: Spinner,
  argTypes: {
    color: {
      defaultValue: 'primary',
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      defaultValue: 'default',
      control: {
        type: 'radio',
        options: ['small', 'default', 'big'],
      },
    },
  },
} as Meta

const Template: Story = (args) => <Spinner {...args} />

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = { color: 'secondary' }
