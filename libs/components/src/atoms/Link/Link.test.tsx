import { render, RenderResult, screen } from '@testing-library/react'

import { Link } from './Link'

const selectors = {
  get link(): HTMLElement {
    return screen.getByRole('link', { name: 'I am a link!' })
  },
}

const renderLink = (props = {}): RenderResult => {
  return render(
    <Link to='#' {...props}>
      I am a link!
    </Link>
  )
}

describe('<Link />', () => {
  it('should render', () => {
    renderLink()

    expect(selectors.link).toMatchSnapshot()
  })
  it('should render target property', () => {
    renderLink({ target: '_blank' })

    expect(selectors.link).toHaveAttribute('target', '_blank')
  })
})
