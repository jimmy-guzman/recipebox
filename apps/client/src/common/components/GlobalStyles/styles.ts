import { css } from '@emotion/react'
// ! Using full path since tree shaking does work for darken, https://github.com/styled-components/polished/issues/478
import darken from 'polished/lib/color/darken'

import { em } from '../../utils'
import {
  COLOR_SECONDARY,
  COLOR_TEXT_BASE,
  FONT_PRIMARY,
  FONT_URL,
} from '../constants'

export const animations = css`
  .slide-left {
    &-enter {
      opacity: 0.01;
      transform: translateX(-100%);
    }
    &-enter.slide-left-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: 500ms ease-in;
    }
    &-exit {
      opacity: 1;
      transform: translateX(0);
    }
    &-exit.slide-left-exit-active {
      opacity: 0.01;
      transform: translateX(-100%);
      transition: 300ms ease-in;
    }
  }

  .slide-enter {
    &-enter {
      opacity: 0.01;
      transform: translateX(100%);
    }
    &-enter.slide-right-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: 500ms ease-in;
    }
    &-exit {
      opacity: 1;
      transform: translateX(0);
    }
    &-exit.slide-right-exit-active {
      opacity: 0.01;
      transform: translateX(100%);
      transition: 300ms ease-in;
    }
  }

  .fade {
    &-enter {
      opacity: 0;
      z-index: 1;
    }
    &-enter.fade-enter-active {
      opacity: 1;
      transition: all 300ms ease-in;
    }
    &-exit {
      display: none;
    }
  }
`

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
