import { css } from '@emotion/react';

import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_TEXT_ALT,
  COLOR_TEXT_BASE,
  COLOR_TEXT_LIGHT,
  FONT_PRIMARY,
  FONT_SECONDARY,
} from '../../constants';

export const base = css({
  border: ' none',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in',
});

export const primary = css({
  '&:disabled': {
    background: COLOR_SECONDARY,
    color: COLOR_PRIMARY,
  },
  '&:focus': {
    background: COLOR_SECONDARY,
    color: COLOR_PRIMARY,
  },
  '&:hover': {
    background: COLOR_SECONDARY,
    color: COLOR_PRIMARY,
  },
  'background': COLOR_PRIMARY,
  'color': COLOR_TEXT_LIGHT,
  'fontFamily': FONT_PRIMARY,
});

export const secondary = css({
  '&:disabled': {
    background: 'transparent',
    color: COLOR_TEXT_ALT,
  },
  '&:focus': {
    background: 'transparent',
    color: COLOR_TEXT_ALT,
  },
  '&:hover': {
    background: 'transparent',
    color: COLOR_TEXT_ALT,
  },
  'background': 'transparent',
  'color': COLOR_TEXT_BASE,
  'fontFamily': FONT_SECONDARY,
});
