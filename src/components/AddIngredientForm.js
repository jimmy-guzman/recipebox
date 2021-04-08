import React, { Component } from 'react'
import PropTypes from 'proptypes'

export default class AddIngredientForm extends Component {
  // static propTypes = {
  //   selectedRecipeIndex: PropTypes.number.isRequired
  // };

  state = { name: '' }

  onNameChange = (e) => {
    const name = e.target.value
    this.setState({ name })
  }

  addIngredient = (e) => {
    e.preventDefault()
    this.props.addIngredient(this.props.match.params.recipe, this.state.name)
    this.setState({ name: '' })
  }
  render() {
    return (
      <li className='box__item'>
        <form onSubmit={this.addIngredient}>
          <input
            value={this.state.name}
            type='text'
            placeholder='new ingredient'
            onChange={this.onNameChange}
          />
        </form>
      </li>
    )
  }
}
