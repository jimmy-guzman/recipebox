import React from 'react'
import { number } from 'prop-types'

interface CloseIconProps {
  height: number
  width: number
}

const CloseIcon = ({ height, width }: CloseIconProps): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 352 512'
    height={height}
    width={width}
  >
    <path d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z' />
  </svg>
)

CloseIcon.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
}

export default CloseIcon