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
            <li>Click on a recipe to view ingredients.</li>
            <li>
              Use the new recipe/ingredient bar to create a new
              recipe/ingredient.
            </li>
            <li>Double click on ingredient or recipe to edit them.</li>
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
