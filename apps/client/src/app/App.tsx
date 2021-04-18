import { Switch, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import {
  Header,
  Instructions,
  Footer,
  GlobalStyles,
  Wrapper,
  GridRow,
} from '../common/components'
import { Recipes, Ingredients } from '../features'

export const App = (): JSX.Element => {
  const { key } = useLocation()

  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <Instructions />
      <GridRow>
        <TransitionGroup component={null}>
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
      </GridRow>
      <Footer />
    </Wrapper>
  )
}
