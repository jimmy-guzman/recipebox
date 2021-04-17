import * as React from 'react'
import { css } from '@emotion/react'

import { COLOR_TEXT_BASE, COLOR_TEXT_ALT } from '../constants'

export interface LinkProps {
  children: React.ReactNode
  target?: string
  to: string
}

export const linkCss = css`
  text-decoration: none;
  color: ${COLOR_TEXT_BASE};
  &:hover {
    color: ${COLOR_TEXT_ALT};
    cursor: pointer;
  }
`

export const Link = ({ children, target, to }: LinkProps): JSX.Element => {
  return (
    <a href={to} target={target} rel='noreferrer' css={linkCss}>
      {children}
    </a>
  )
}
