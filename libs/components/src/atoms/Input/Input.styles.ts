import { css, SerializedStyles } from '@emotion/react'
import { em } from '@recipe-box/utils'

import {
  COLOR_PRIMARY,
  FONT_WEIGHT_REGULAR,
  COLOR_SECONDARY,
} from '../../constants'
import { InputProps } from './Input.types'

export const styles = ({
  size,
  isFullWidth,
}: Pick<InputProps, 'size' | 'isFullWidth'>): SerializedStyles => css`
  background: inherit;
  padding: ${size === 'big' ? em('1px') : em('8px')};
  letter-spacing: ${em('1px')};
  color: ${COLOR_PRIMARY};
  width: ${isFullWidth ? '100%' : 'initial'};
  border: none;
  outline: none;
  font-size: ${size === 'default' ? em('18px') : em('32px')};
  font-weight: ${FONT_WEIGHT_REGULAR};
  font-family: inherit;
  text-align: inherit;
  &:focus {
    cursor: auto;
  }
  &:hover {
    color: ${COLOR_SECONDARY};
    cursor: pointer;
  }
`
