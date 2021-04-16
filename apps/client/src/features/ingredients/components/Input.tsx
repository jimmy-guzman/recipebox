import React from 'react'
import { css } from '@emotion/react'

interface InputProps {
  children: React.ReactNode
  onChange?: () => void
  placeholder?: string
  value?: string | ReadonlyArray<string> | number
}

export const Input = ({
  value,
  placeholder,
  onChange,
}: InputProps): JSX.Element => {
  return (
    <input
      css={css`
        background: inherit;
        color: #bf268a;
        width: 100%;
        border: none;
        outline: none;
        text-align: center;
        &:focus {
          cursor: auto;
        }
        &:hover {
          cursor: pointer;
        }
      `}
      value={value}
      type='text'
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}
