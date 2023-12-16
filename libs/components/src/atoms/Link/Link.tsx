import * as React from 'react';

import { linkCss } from './Link.constants';

export interface LinkProps {
  children: React.ReactNode;
  target?: string;
  to: string;
}

export const Link = ({ children, target, to }: LinkProps): JSX.Element => {
  return (
    <a href={to} target={target} rel='noreferrer' css={linkCss}>
      {children}
    </a>
  );
};
