import { css } from '@emotion/react'

import { List } from '../../atoms/List'

interface BoxContentProps {
  children: React.ReactNode
}

export const BoxContent = ({ children }: BoxContentProps): JSX.Element => {
  return (
    <List
      css={css`
        max-height: 450px;
        height: 100%;
        overflow-y: auto;
      `}
    >
      {children}
    </List>
  )
}
