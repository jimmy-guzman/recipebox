import React from 'react'
import { Story, Meta } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import { Header } from './Header'

const withRouter = (story: () => JSX.Element): JSX.Element => {
  return <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
}

export default {
  title: 'client/Header',
  component: Header,
  decorators: [withRouter],
} as Meta

const Template: Story = (args) => <Header {...args} />

export const Primary = Template.bind({})
