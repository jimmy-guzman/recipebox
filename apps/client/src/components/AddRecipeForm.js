import React, { Component } from 'react'
import { func } from 'prop-types'

export default class AddRecipeForm extends Component {
  static propTypes = {
    addRecipe: func.isRequired,
  }
  state = { name: '' }

  onNameChange = (e) => {
    const name = e.target.value

    this.setState({ name })
  }

  addRecipe = (e) => {
    e.preventDefault()
    this.props.addRecipe(this.state.name)
    this.setState({ name: '' })
  }
  render() {
    return (
      <li className='box__item'>
        <form onSubmit={this.addRecipe}>
          <input
            value={this.state.name}
            type='text'
            placeholder='new recipe'
            onChange={this.onNameChange}
          />
        </form>
      </li>
    )
  }
}
