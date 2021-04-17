import { em } from '../utils'
import { Link } from './Link'

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <span css={{ fontsize: em('12px') }}> Designed & Coded by </span>
      <Link to='https://jimmyguzman.com/' target='_blank'>
        Jimmy Guzman
      </Link>
    </footer>
  )
}
