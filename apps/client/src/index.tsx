import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { BridgeProvider } from '@recipe-box/bridge'

import { App } from './app'

render(
  <BridgeProvider>
    <Router>
      <App />
    </Router>
  </BridgeProvider>,
  document.getElementById('app')
)
