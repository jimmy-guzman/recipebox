import { mq } from '@recipe-box/utils';
import { forwardRef } from 'react';

import { calcGridColumnWidth } from './Grid.utils';

export const GridCol = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    size: number;
  }
>((props, ref) => (
  <div
    ref={ref}
    className={props.className}
    css={{ [mq('md')]: { width: calcGridColumnWidth(props.size) } }}
  >
    {props.children}
  </div>
));

export const GridRow = ({
  children,
  className,
  justifyContent = 'center',
  alignItems = 'center',
}: {
  alignItems?: string;
  children: React.ReactNode;
  className?: string;
  justifyContent?: string;
}): JSX.Element => {
  return (
    <div
      className={className}
      css={{
        display: 'flex',
        alignItems,
        justifyContent,
        [mq('md')]: {
          flexFlow: 'row wrap',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      {children}
    </div>
  );
};
