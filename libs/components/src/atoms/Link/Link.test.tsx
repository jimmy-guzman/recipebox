import { render } from '@testing-library/react'

import { Link } from './Link'

describe('<Link />', () => {
  it('should render', () => {
    const { container } = render(<Link to='#'>I am a link!</Link>)

    expect(container.firstChild).toMatchSnapshot()
  })
})
