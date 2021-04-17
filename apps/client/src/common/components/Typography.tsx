import React from 'react'

import { em } from '../utils'
import { FONT_PRIMARY, FONT_SECONDARY } from './constants'

export interface TypographyProps {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  children: React.ReactNode
  color?: string
  font?: 'primary' | 'secondary'
  variant?: 'h1' | 'h2' | 'p' | 'span'
}

export const Typography = ({
  align = 'inherit',
  children,
  color,
  font = 'primary',
  variant = 'span',
}: TypographyProps): JSX.Element => {
  const fontFamily = font === 'primary' ? FONT_PRIMARY : FONT_SECONDARY
  const base = { textAlign: align, label: variant, fontFamily, color }
  const headerBase = { ...base, margin: 0 }

  if (variant === 'h1') {
    return (
      <h1 css={{ ...headerBase, fontSize: `${em('64px')}` }}>{children}</h1>
    )
  }

  if (variant === 'h2') {
    return (
      <h2 css={{ ...headerBase, fontSize: `${em('32px')}` }}>{children}</h2>
    )
  }

  return <span css={base}>{children}</span>
}
