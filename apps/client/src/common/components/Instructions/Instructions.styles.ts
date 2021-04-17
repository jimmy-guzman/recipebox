import { css } from '@emotion/react'

import { mq, em } from '../../utils'
import {
  COLOR_SECONDARY,
  COLOR_TEXT_BASE,
  COLOR_TEXT_LIGHT,
  FONT_PRIMARY,
} from '../constants'

export const wrapper = css`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  ${mq('md')} {
    width: 60%;
  }
`

export const list = css`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: ${COLOR_SECONDARY};
  color: ${COLOR_TEXT_LIGHT};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: ${em('8px')};
  li {
    width: 100%;
  }
`

export const close = css`
  font-family: ${FONT_PRIMARY};
  position: absolute;
  top: ${em('9.5px')};
  right: ${em('12px')};
  color: ${COLOR_TEXT_LIGHT};
  outline: none;
  &:hover {
    color: ${COLOR_TEXT_BASE};
    cursor: pointer;
  }
`
