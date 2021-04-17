import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Typography, TypographyProps } from './Typography'

export default {
  title: 'client/Typography',
  component: Typography,
} as Meta

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>I am some typography!</Typography>
)

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = { font: 'secondary' }
