import React, { Component } from 'react'
import { func, shape, string } from 'prop-types'

export default class AddIngredientForm extends Component {
  static propTypes = {
    addIngredient: func.isRequired,
    match: shape({ params: shape({ recipe: string }) }),
  }

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
