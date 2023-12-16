import { css } from '@emotion/react';
import { em } from '@recipe-box/utils';
import { forwardRef } from 'react';

import { COLOR_WHITE } from '../../constants';

interface BoxItemProps {
  children: React.ReactNode;
}

export const BoxItem = forwardRef<HTMLLIElement, BoxItemProps>((props, ref) => (
  <li
    ref={ref}
    css={css`
      background: ${COLOR_WHITE};
      width: 90%;
      margin: ${em('20px')} auto;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      button {
        margin-right: ${em('8px')};
      }
      a {
        padding: ${em('8px')};
        font-size: ${em('18px')};
      }
    `}
  >
    {props.children}
  </li>
));
