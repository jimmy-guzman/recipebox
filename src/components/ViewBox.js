import React from 'react'
import { func, arrayOf, string, shape } from 'prop-types'
import { Link } from 'react-router-dom'

import BackIcon from './SVGs/BackIcon'
import Ingredients from './Ingredients'

const ViewBox = (props) => {
  const recipeId = props.match.params.recipe
  const i = props.recipes.findIndex((recipe) => recipe.recipeId === recipeId)
  const recipeIngredients = props.ingredients[recipeId] || []

  return (
    <div className='box__container  grid__col--6'>
      <header className='box__header'>
        <input
          value={props.recipes[i].name}
          onChange={(e) => props.updateRecipe(i, e.target.value)}
          readOnly='true'
          onDoubleClick={(e) => (e.target.readOnly = '')}
          onBlur={(e) => (e.currentTarget.readOnly = 'true')}
        />

        <Link to='/' role='link' aria-label='back'>
          <BackIcon height={24} width={24} />
        </Link>
      </header>

      <Ingredients recipeIngredients={recipeIngredients} {...props} />
    </div>
  )
}

ViewBox.propTypes = {
  ingredients: shape({ name: string, id: string }),
  match: shape({ params: shape({ recipe: string }) }),
  recipes: arrayOf(shape({ name: string })),
  updateRecipe: func.isRequired,
}
export default ViewBox
