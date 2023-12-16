import { em } from '@recipe-box/utils';
import { forwardRef } from 'react';

import { GridCol } from '../../atoms/Grid';
import {
  COLOR_BOX_BG,
  COLOR_WHITE,
  FONT_SECONDARY,
  PRIMARY_BOX_SHADOW,
} from '../../constants';

interface BoxProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <GridCol
    ref={ref}
    size={6}
    css={{
      background: props.variant === 'primary' ? COLOR_BOX_BG : COLOR_WHITE,
      boxShadow: PRIMARY_BOX_SHADOW,
      fontFamily: FONT_SECONDARY,
      paddingBottom: em('8px'),
      zIndex: 2,
    }}
  >
    {props.children}
  </GridCol>
));
