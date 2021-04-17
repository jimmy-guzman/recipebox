import React from 'react'
import { Link } from 'react-router-dom'

import { Typography } from './Typography'
import { COLOR_HIGHLIGHT, COLOR_PRIMARY, COLOR_SECONDARY } from './constants'

export const Header = (): JSX.Element => (
  <header
    css={{
      backgroundColor: COLOR_PRIMARY,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }}
  >
    <Typography variant='h1' align='center'>
      <Link to='/' css={{ color: COLOR_SECONDARY }}>
        <span
          css={{
            color: COLOR_HIGHLIGHT,
            fontFamily: "'Caveat', cursive",
          }}
        >
          Recipe
        </span>
        BOX
      </Link>
    </Typography>
  </header>
)
