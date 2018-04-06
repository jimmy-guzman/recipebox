import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actionCreators";

import Header from "./Header";
import RecipesBox from "./RecipesBox";
import ViewBox from "./ViewBox";

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

const mapStateToProps = state => ({
  recipes: state.recipes,
  selectedRecipeIndex: state.selectedRecipeIndex
});

class App extends React.Component {
  render() {
    let selectedRecipe;
    if (this.props.selectedRecipeIndex !== -1) {
      selectedRecipe = this.props.recipes[this.props.selectedRecipeIndex];
    }
    return (
      <div className="container">
        <Header />
        <div className="grid__row">
          <RecipesBox
            recipes={this.props.recipes}
            selectRecipe={this.props.selectRecipe}
            removeRecipe={this.props.removeRecipe}
            addRecipe={this.props.addRecipe}
          />
          <ViewBox selectedRecipe={selectedRecipe} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
