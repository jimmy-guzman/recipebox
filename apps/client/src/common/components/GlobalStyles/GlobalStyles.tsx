import { css, Global } from '@emotion/react'

import { COLOR_TEXT_BASE, FONT_PRIMARY, FONT_URL } from '../constants'

export const GlobalStyles = (): JSX.Element => {
  return (
    <Global
      styles={css`
        @import url(${FONT_URL});
        * {
          box-sizing: border-box;
          body {
            margin: 0;
            height: 100vh;
            color: ${COLOR_TEXT_BASE};
            font-family: ${FONT_PRIMARY};
          }
        }
      `}
    />
  )
}
