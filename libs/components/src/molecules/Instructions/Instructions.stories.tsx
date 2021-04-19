import { Story, Meta } from '@storybook/react'

import { Instructions } from './Instructions'

export default {
  title: 'components/molecules/Instructions',
  component: Instructions,
} as Meta

const Template: Story = (args) => <Instructions {...args} />

export const Primary = Template.bind({})
