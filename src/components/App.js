import React, { Component } from "react";
import PropTypes from "proptypes";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actionCreators";
import { Switch, Route, withRouter } from "react-router-dom";

import Header from "./Header";
import RecipesBox from "./RecipesBox";
import ViewBox from "./ViewBox";
import Instructions from "./Instructions";
import Main from "./Main";

import Background from "../img/background.svg";

const styles = {
  backgroundImage: `url(${Background})`
};

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

const mapStateToProps = ({ recipes, ingredients }) => ({
  recipes,
  ingredients
});

class App extends Component {
  render() {
    return (
      <div className="wrapper" style={styles}>
        <Header />
        <div className="container">
          <Instructions />
          <div className="grid__row">
            <Switch>
              <Route
                exact
                path="/"
                render={props => <RecipesBox {...this.props} />}
              />
              <Route
                path="/:recipe"
                render={props => <ViewBox {...this.props} {...props} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(App));
