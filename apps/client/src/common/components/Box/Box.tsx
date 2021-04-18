import { COLOR_BOX_BG, FONT_SECONDARY, PRIMARY_BOX_SHADOW } from '../constants'

interface BoxProps {
  children: React.ReactNode
  className?: string
}

export const Box = ({ children, className }: BoxProps): JSX.Element => {
  return (
    <div
      className={className}
      css={{
        zIndex: 2,
        fontFamily: FONT_SECONDARY,
        background: COLOR_BOX_BG,
        boxShadow: PRIMARY_BOX_SHADOW,
      }}
    >
      {children}
    </div>
  )
}
