import { css } from '@emotion/react'
import { MouseEventHandler } from 'react'

import { em } from '../../utils'
import { base, primary, secondary } from './Button.styles'

export interface ButtonProps {
  ariaLabel?: string
  children: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  size?: 'default' | 'big'
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  ariaLabel,
  children,
  onClick,
  size = 'default',
  variant = 'primary',
}: ButtonProps): JSX.Element => {
  return (
    <button
      type='button'
      aria-label={ariaLabel}
      onClick={onClick}
      css={css([
        base,
        variant === 'secondary' ? secondary : primary,
        {
          fontSize: size === 'big' ? em('32px') : 'inherit',
        },
      ])}
    >
      {children}
    </button>
  )
}
