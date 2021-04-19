import { css } from '@emotion/react'

import {
  COLOR_BOX_BG,
  FONT_SECONDARY,
  PRIMARY_BOX_SHADOW,
} from '../../constants'
import { GridCol } from '../../atoms/Grid'

interface BoxProps {
  children: React.ReactNode
}

export const Box = ({ children }: BoxProps): JSX.Element => {
  return (
    <GridCol
      size={6}
      css={css`
        z-index: 2;
        font-family: ${FONT_SECONDARY};
        background: ${COLOR_BOX_BG};
        box-shadow: ${PRIMARY_BOX_SHADOW};
      `}
    >
      {children}
    </GridCol>
  )
}
