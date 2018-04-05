import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actionCreators";

import Header from "./Header";
import RecipesBox from "./RecipesBox";
import ViewBox from "./ViewBox";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        {/* <div className="grid__row">
          <RecipesBox recipes={this.state.recipes} />
          <ViewBox />
        </div> */}
      </div>
    );
  }
}

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

const mapStateToProps = state => ({
  recipes: state.recipes
});

export default connect(mapStateToProps, mapDispachToProps)(App);
