import { Link as RouterLink } from 'react-router-dom';

import { linkCss } from '../../atoms/Link';
import { Typography } from '../../atoms/Typography';
import {
  COLOR_HIGHLIGHT,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
} from '../../constants';

export const Header = (): JSX.Element => (
  <header
    css={{
      backgroundColor: COLOR_PRIMARY,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }}
  >
    <Typography variant='h1' align='center'>
      <RouterLink to='/' css={[linkCss, { color: COLOR_SECONDARY }]}>
        <Typography font='secondary' color={COLOR_HIGHLIGHT}>
          Recipe
        </Typography>
        BOX
      </RouterLink>
    </Typography>
  </header>
);
