import React, { Component } from 'react'
import PropTypes from 'proptypes'
import { Link } from 'react-router-dom'

const Recipe = ({ details, index, removeRecipe }) => (
  <li className='box__item'>
    <Link to={`/${details.recipeId}`}>{details.name} </Link>
    <button className='btn__secondary' onClick={() => removeRecipe(index)}>
      X
    </button>
  </li>
)

Recipe.propTypes = {
  details: PropTypes.object.isRequired,
  removeRecipe: PropTypes.func.isRequired,
  updateRecipe: PropTypes.func.isRequired,
}
export default Recipe
