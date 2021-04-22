import { em } from '@recipe-box/utils'

import { COLOR_BOX_HEADER_BG } from '../../constants'

interface BoxHeaderProps {
  children: React.ReactNode
  className?: string
}

export const BoxHeader = ({
  children,
  className,
}: BoxHeaderProps): JSX.Element => {
  return (
    <header
      className={className}
      css={{
        alignItems: 'center',
        background: COLOR_BOX_HEADER_BG,
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'center',
        padding: `0 ${em('7px')}`,
        position: 'relative',
        textAlign: 'center',
      }}
    >
      {children}
    </header>
  )
}
