import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { StateProvider } from '@recipe-box/state'

import { App } from './app'

render(
  <StateProvider>
    <Router>
      <App />
    </Router>
  </StateProvider>,
  document.getElementById('app')
)
