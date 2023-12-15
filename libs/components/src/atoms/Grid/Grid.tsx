import { mq } from '@recipe-box/utils'

import { calcGridColumnWidth } from './Grid.utils'

export const GridCol = ({
  children,
  className,
  size,
}: {
  children: React.ReactNode
  className?: string
  size: number
}): JSX.Element => {
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
}: {
  alignItems?: string
  children: React.ReactNode
  className?: string
  justifyContent?: string
}): JSX.Element => {
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
