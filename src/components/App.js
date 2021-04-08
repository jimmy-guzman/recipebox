import React, { Component } from 'react'
import { shape, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import * as actionCreators from '../actions/actionCreators'
import Header from './Header'
import RecipesBox from './RecipesBox'
import ViewBox from './ViewBox'
import Instructions from './Instructions'
import Background from '../img/background.svg'

const styles = {
  backgroundImage: `url(${Background})`,
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(actionCreators, dispatch)

const mapStateToProps = ({ recipes, ingredients }) => ({
  recipes,
  ingredients,
})

class App extends Component {
  render() {
    return (
      <div className='wrapper' style={styles}>
        <Header />
        <Instructions />
        <TransitionGroup className='grid__row'>
          <CSSTransition
            key={this.props.location.key}
            classNames='fade'
            timeout={300}
          >
            <Switch>
              <Route
                exact
                path='/'
                render={() => <RecipesBox {...this.props} />}
              />
              <Route
                path='/:recipe'
                render={(props) => <ViewBox {...this.props} {...props} />}
              />
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
}

App.propTypes = {
  location: shape({ key: string }),
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
