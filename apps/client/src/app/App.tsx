import { Suspense } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  Header,
  Instructions,
  Footer,
  GlobalStyles,
  PageWrapper,
  GridRow,
  Spinner,
} from '@recipe-box/components'
import { namedLazy } from '@recipe-box/utils'

const { Home } = namedLazy(() => import('../pages/home'))
const { Ingredients } = namedLazy(() => import('../pages/ingredients'))

export const App = (): JSX.Element => {
  const { key } = useLocation()

  return (
    <PageWrapper>
      <GlobalStyles />
      <Header />
      <Instructions />
      <GridRow>
        <Suspense fallback={<Spinner size='large' />}>
          <TransitionGroup component={null}>
            <CSSTransition key={key} classNames='fade' timeout={300}>
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/recipe/:id'>
                  <Ingredients />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Suspense>
      </GridRow>
      <Footer />
    </PageWrapper>
  )
}
