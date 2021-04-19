import { mq } from '@recipe-box/utils'

import { calcGridColumnWidth } from './Grid.utils'

interface GridProps {
  children: React.ReactNode
  className?: string
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

export const GridRow = ({ children, className }: RowProps): JSX.Element => {
  return (
    <div
      className={className}
      css={{
        [mq('md')]: {
          display: 'flex',
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
