import { css } from '@emotion/react';

import { COLOR_TEXT_ALT, COLOR_TEXT_BASE } from '../../constants';

export const linkCss = css`
  text-decoration: none;
  color: ${COLOR_TEXT_BASE};
  &:hover {
    color: ${COLOR_TEXT_ALT};
    cursor: pointer;
  }
`;
