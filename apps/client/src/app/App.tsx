import * as React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Header, Instructions, RecipesBox, ViewBox } from '../components'
import Background from '../img/background.svg'

const styles = {
  backgroundImage: `url(${Background})`,
}

export const App = (): JSX.Element => {
  const location = useLocation()

  return (
    <div className='wrapper' style={styles}>
      <Header />
      <Instructions />
      <TransitionGroup className='grid__row'>
        <CSSTransition key={location.key} classNames='fade' timeout={300}>
          <Switch>
            <Route exact path='/'>
              <RecipesBox />
            </Route>
            <Route path='/recipe/:id'>
              <ViewBox />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <footer>
        <span> Design & Coded by</span>
        <a href='https://jimmyguzman.com/' target='_blank' rel='noreferrer'>
          Jimmy Guzman
        </a>
      </footer>
    </div>
  )
}
