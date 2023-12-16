import { em } from '@recipe-box/utils'
import React from 'react'

import {
  COLOR_BOX_BG,
  COLOR_WHITE,
  FONT_SECONDARY,
  PRIMARY_BOX_SHADOW,
} from '../../constants'
import { GridCol } from '../../atoms/Grid'

interface BoxProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type, react/display-name
export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <GridCol
    ref={ref}
    size={6}
    css={{
      background: props.variant === 'primary' ? COLOR_BOX_BG : COLOR_WHITE,
      boxShadow: PRIMARY_BOX_SHADOW,
      fontFamily: FONT_SECONDARY,
      paddingBottom: em('8px'),
      zIndex: 2,
    }}
  >
    {props.children}
  </GridCol>
))
