import React, { Component, Fragment } from "react";

export default class Instructions extends Component {
  state = {
    isOpened: true
  };
  handleClick = () => {
    this.setState({
      isOpened: false
    });
  };
  render() {
    if (this.state.isOpened) {
      return (
        <div className="instructions">
          <ul>
            <li>Click on a recipe name to view that recipe's ingredients.</li>
            <li>
              Use the new recipe/ingredient bar to create a new
              recipe/ingredient.
            </li>
            <li>
              Double click on a ingredient/recipe name to edit that
              recipe/ingredient.
            </li>
          </ul>
          <span className="close" onClick={this.handleClick}>
            X
          </span>
        </div>
      );
    } else {
      return null;
    }
  }
}
