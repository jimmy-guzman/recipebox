import { css } from '@emotion/react'

import { em } from '../../utils'
import { COLOR_WHITE } from '../constants'

interface BoxItemProps {
  children: React.ReactNode
}

export const BoxItem = ({ children }: BoxItemProps): JSX.Element => {
  return (
    <li
      css={css`
        background: ${COLOR_WHITE};
        width: 90%;
        margin: ${em('20px')} auto;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        button {
          margin-right: ${em('8px')};
        }
        a {
          padding: ${em('8px')};
          font-size: ${em('18px')};
        }
      `}
    >
      {children}
    </li>
  )
}
