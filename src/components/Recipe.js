import React from 'react'
import { string, func, number, shape } from 'prop-types'
import { Link } from 'react-router-dom'

const Recipe = ({ details, index, removeRecipe }) => (
  <li className='box__item'>
    <Link to={`/${details.recipeId}`}>{details.name} </Link>
    <button
      type='button'
      aria-label={`delete ${details.name}`}
      className='btn__secondary'
      onClick={() => removeRecipe(index)}
    >
      X
    </button>
  </li>
)

Recipe.propTypes = {
  details: shape({ recipeId: string, name: string }),
  removeRecipe: func.isRequired,
  index: number.isRequired,
}

export default Recipe
