import { em } from '@recipe-box/utils'

import {
  COLOR_BOX_HEADER_BG,
  COLOR_PRIMARY,
  COLOR_TEXT_BASE,
  COLOR_TEXT_LIGHT,
} from '../../constants'

interface BoxHeaderProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}

export const BoxHeader = ({
  children,
  className,
  variant = 'primary',
}: BoxHeaderProps): JSX.Element => {
  return (
    <header
      className={className}
      css={{
        alignItems: 'center',
        background: variant === 'primary' ? COLOR_BOX_HEADER_BG : COLOR_PRIMARY,
        color: variant === 'primary' ? COLOR_TEXT_BASE : COLOR_TEXT_LIGHT,
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
