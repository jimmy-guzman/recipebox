import React from 'react'

import { em } from '../utils'

interface TypographyProps {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify'
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'p' | 'span'
}

export const Typography = ({
  align: textAlign = 'inherit',
  children,
  variant,
}: TypographyProps): JSX.Element => {
  const base = { textAlign, label: variant }
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

  return <span>{children}</span>
}
