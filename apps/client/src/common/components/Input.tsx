import React, { ChangeEvent, MouseEventHandler } from 'react'
import { css } from '@emotion/react'

import { em } from '../utils/style-utils'

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
        color: #bf268a;
        width: ${isFullWidth ? '100%' : 'initial'};
        border: none;
        outline: none;
        font-size: ${size === 'default' ? em('18px') : em('32px')};
        font-weight: 400;
        font-family: inherit;
        text-align: inherit;
        &:focus {
          cursor: auto;
        }
        &:hover {
          color: #04d9b2;
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
