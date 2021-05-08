import { em } from '@recipe-box/utils'

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

export const Box = ({
  children,
  variant = 'primary',
}: BoxProps): JSX.Element => {
  return (
    <GridCol
      size={6}
      css={{
        background: variant === 'primary' ? COLOR_BOX_BG : COLOR_WHITE,
        boxShadow: PRIMARY_BOX_SHADOW,
        fontFamily: FONT_SECONDARY,
        paddingBottom: em('8px'),
        zIndex: 2,
      }}
    >
      {children}
    </GridCol>
  )
}
