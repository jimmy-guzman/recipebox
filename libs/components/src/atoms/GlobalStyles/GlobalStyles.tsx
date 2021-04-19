import { css, Global } from '@emotion/react'

import { scrollbar, animations, base } from './styles'

export const GlobalStyles = (): JSX.Element => {
  return <Global styles={css([base, scrollbar, animations])} />
}
