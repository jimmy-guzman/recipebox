import { Story, Meta } from '@storybook/react'
import { Footer } from '@recipe-box/components'

export default {
  title: 'components/molecules/Footer',
  component: Footer,
} as Meta

const Template: Story = (args) => <Footer {...args} />

export const Primary = Template.bind({})
