import React, { Component } from "react";

export default class AddIngredientForm extends Component {
  state = { name: "" };

  onNameChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  addIngredient = e => {
    e.preventDefault();
    this.props.addIngredient(this.state.name, this.props.selectedRecipeIndex);
    this.setState({ name: "" });
  };
  render() {
    return (
      <li className="recipes__item">
        <form onSubmit={this.addIngredient}>
          <input
            value={this.state.name}
            type="text"
            placeholder="new ingredient"
            onChange={this.onNameChange}
          />
        </form>
      </li>
    );
  }
}
