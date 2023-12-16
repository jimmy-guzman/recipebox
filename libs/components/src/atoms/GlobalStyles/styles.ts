import { css } from '@emotion/react'
// ! Using full path since tree shaking does work for darken, https://github.com/styled-components/polished/issues/478
import darken from 'polished/lib/color/darken'
import { em } from '@recipe-box/utils'

import {
  COLOR_SECONDARY,
  COLOR_TEXT_BASE,
  FONT_PRIMARY,
  FONT_URL,
} from '../../constants'

export const scrollbar = css`
  ::-webkit-scrollbar {
    width: ${em('12px')};
  }
  ::-webkit-scrollbar-track {
    background: inherit;
  }
  ::-webkit-scrollbar-thumb {
    background: ${COLOR_SECONDARY};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${darken(0.1, COLOR_SECONDARY)};
  }
`

export const base = css`
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
`
