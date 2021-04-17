import { SerializedStyles, css } from '@emotion/react'

interface ListProps {
  children: React.ReactNode
  className?: string
  customCss?: SerializedStyles
}

export const List = ({
  children,
  className,
  customCss,
}: ListProps): JSX.Element => {
  return (
    <ul
      className={className}
      css={css([
        {
          padding: 0,
          listStyleType: 'none',
          margin: 0,
        },
        customCss,
      ])}
    >
      {children}
    </ul>
  )
}
