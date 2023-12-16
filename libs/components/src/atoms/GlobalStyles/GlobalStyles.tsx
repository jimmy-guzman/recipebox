import { css, Global } from '@emotion/react';

import { base, scrollbar } from './styles';

export const GlobalStyles = (): JSX.Element => {
  return <Global styles={css([base, scrollbar])} />;
};
