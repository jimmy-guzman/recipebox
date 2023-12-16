import { Story, Meta } from '@storybook/react'
import { Link, LinkProps } from '@recipe-box/components'

export default {
  title: 'components/atoms/Link',
  component: Link,
} as Meta

const Template: Story<LinkProps> = (args) => (
  <Link {...args}>I am an Link!</Link>
)

export const Primary = Template.bind({})
