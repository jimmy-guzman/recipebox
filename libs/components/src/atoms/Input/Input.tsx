import { ChangeEvent, MouseEventHandler } from 'react'
import { css } from '@emotion/react'
import { em } from '@recipe-box/utils'

import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  FONT_WEIGHT_REGULAR,
} from '../../constants'

export interface InputProps {
  isFullWidth?: boolean
  isReadOnly?: boolean
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onDoubleClick?: MouseEventHandler<HTMLInputElement>
  placeholder?: string
  size?: 'default' | 'big'
  value?: string
}

export const Input = ({
  isFullWidth,
  onBlur,
  onChange,
  onDoubleClick,
  placeholder,
  isReadOnly,
  size = 'default',
  value,
}: InputProps): JSX.Element => {
  return (
    <input
      css={css`
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
      `}
      value={value}
      type='text'
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      onDoubleClick={onDoubleClick}
      readOnly={isReadOnly}
    />
  )
}
