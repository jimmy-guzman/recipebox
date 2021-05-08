import { mq } from '@recipe-box/utils'

import { calcGridColumnWidth } from './Grid.utils'

interface GridProps {
  alignItems?: string
  children: React.ReactNode
  className?: string
  justifyContent?: string
}

export type RowProps = GridProps

export interface ColProps extends GridProps {
  size: number
}

export const GridCol = ({
  children,
  className,
  size,
}: ColProps): JSX.Element => {
  return (
    <div
      className={className}
      css={{ [mq('md')]: { width: calcGridColumnWidth(size) } }}
    >
      {children}
    </div>
  )
}

export const GridRow = ({
  children,
  className,
  justifyContent = 'center',
  alignItems = 'center',
}: RowProps): JSX.Element => {
  return (
    <div
      className={className}
      css={{
        display: 'flex',
        alignItems,
        justifyContent,
        [mq('md')]: {
          flexFlow: 'row wrap',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      {children}
    </div>
  )
}
