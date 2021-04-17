import { Switch, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Header, Instructions, Link } from '../common/components'
import { Recipes, Ingredients } from '../features'
import Background from '../common/img/background.svg'

const styles = {
  backgroundImage: `url(${Background})`,
}

export const App = (): JSX.Element => {
  const { key } = useLocation()

  return (
    <div className='wrapper' style={styles}>
      <Header />
      <Instructions />
      <TransitionGroup className='grid__row'>
        <CSSTransition key={key} classNames='fade' timeout={300}>
          <Switch>
            <Route exact path='/'>
              <Recipes />
            </Route>
            <Route path='/recipe/:id'>
              <Ingredients />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <footer>
        <span> Designed & Coded by </span>
        <Link to='https://jimmyguzman.com/' target='_blank'>
          Jimmy Guzman
        </Link>
      </footer>
    </div>
  )
}
