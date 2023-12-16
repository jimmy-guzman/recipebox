import { css, Global } from '@emotion/react'

import { scrollbar, base } from './styles'

export const GlobalStyles = (): JSX.Element => {
  return <Global styles={css([base, scrollbar])} />
}
