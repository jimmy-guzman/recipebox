import { keyframes } from '@emotion/react';
import { em } from '@recipe-box/utils';

import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../constants';

const svgAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`;

const circleAnimation = keyframes`
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  
  50%,
  75% {
    stroke-dashoffset: 75;
    transform: rotate(45deg);
  }
  
  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
`;

const getDashValue = (radius: number, percentage: string): number => {
  const circumference = 2 * Math.PI * radius;
  const percentageAsDecimal = parseFloat(percentage) / 100;

  return circumference * percentageAsDecimal;
};

interface SpinnerProps {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'default' | 'large';
}

const sizes = {
  small: em('50px'),
  default: em('100px'),
  large: em('200px'),
};
const RADIUS = 45;

export const Spinner = ({
  color = 'primary',
  size = 'default',
}: SpinnerProps): JSX.Element => {
  return (
    <svg
      viewBox='0 0 100 100'
      xmlns='http://www.w3.org/2000/svg'
      css={{
        animation: `2s linear infinite ${svgAnimation}`,
        maxWidth: sizes[size],
      }}
    >
      <circle
        cx='50'
        cy='50'
        r={RADIUS}
        css={{
          animation: `1.4s ease-in-out infinite both ${circleAnimation}`,
          display: 'block',
          fill: 'transparent',
          stroke: color === 'primary' ? COLOR_PRIMARY : COLOR_SECONDARY,
          strokeDasharray: getDashValue(RADIUS, '100%'),
          strokeDashoffset: getDashValue(RADIUS, '97%'),
          strokeLinecap: 'round',
          strokeWidth: em('10px'),
          transformOrigin: '50% 50%',
        }}
      />
    </svg>
  );
};
