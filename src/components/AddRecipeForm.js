import React, { Component } from "react";

export default class AddRecipeForm extends Component {
  state = { name: "" };

  onNameChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  addRecipe = e => {
    e.preventDefault();
    this.props.addRecipe(this.state.name);
    this.setState({ name: "" });
  };
  render() {
    return (
      <li className="box__item">
        <form onSubmit={this.addRecipe}>
          <input
            value={this.state.name}
            type="text"
            placeholder="new recipe"
            onChange={this.onNameChange}
          />
        </form>
      </li>
    );
  }
}
