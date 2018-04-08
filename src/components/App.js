import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actionCreators";

import Header from "./Header";
import RecipesBox from "./RecipesBox";
import ViewBox from "./ViewBox";
import Instructions from "./Instructions";

import Background from "../img/background.svg";

const styles = {
  backgroundImage: `url(${Background})`
};

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

const mapStateToProps = state => ({
  recipes: state.recipes,
  selectedRecipeIndex: state.selectedRecipeIndex
});

class App extends Component {
  render() {
    let selectedRecipe;
    if (this.props.selectedRecipeIndex !== -1) {
      selectedRecipe = this.props.recipes[this.props.selectedRecipeIndex];
    }
    return (
      <div className="container" style={styles}>
        <Header />
        <Instructions />
        <div className="grid__row">
          <RecipesBox
            recipes={this.props.recipes}
            selectRecipe={this.props.selectRecipe}
            removeRecipe={this.props.removeRecipe}
            addRecipe={this.props.addRecipe}
            updateRecipe={this.props.updateRecipe}
          />
          <ViewBox
            selectedRecipe={selectedRecipe}
            addIngredient={this.props.addIngredient}
            selectedRecipeIndex={this.props.selectedRecipeIndex}
            removeIngredient={this.props.removeIngredient}
            updateIngredient={this.props.updateIngredient}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
