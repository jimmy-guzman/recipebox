import { Switch, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  Header,
  Instructions,
  Footer,
  GlobalStyles,
  PageWrapper,
  GridRow,
} from '@recipe-box/components'

import { Recipes, Ingredients } from '../features'

export const App = (): JSX.Element => {
  const { key } = useLocation()

  return (
    <PageWrapper>
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
    </PageWrapper>
  )
}
