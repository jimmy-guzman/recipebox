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
              Use the new recipe or ingredient bar to create a new recipe or
              ingredient.
            </li>
            <li>
              When viewing the recipe, you can double click on a ingredient or
              recipe name to edit that recipe or ingredient.
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
