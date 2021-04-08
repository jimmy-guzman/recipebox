import React from 'react'
import { func, arrayOf, string, shape } from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Recipe from './Recipe'
import AddRecipeForm from './AddRecipeForm'

const RecipesBox = (props) => {
  const transitionOptions = {
    classNames: 'slide-left',
    timeout: { enter: 500, exit: 500 },
  }

  return (
    <div className='box__container  grid__col--6'>
      <header className='box__header'>
        <h1>Recipes</h1>
      </header>

      <TransitionGroup component='ul' className='box__list'>
        {props.recipes.map((recipe, index) => (
          <CSSTransition {...transitionOptions} key={recipe.recipeId}>
            <Recipe
              details={recipe}
              key={recipe.recipeId}
              removeRecipe={props.removeRecipe}
              updateRecipe={props.updateRecipe}
              index={index}
            />
          </CSSTransition>
        ))}
        <AddRecipeForm addRecipe={props.addRecipe} />
      </TransitionGroup>
    </div>
  )
}

RecipesBox.propTypes = {
  recipes: arrayOf(shape({ recipeId: string })),
  updateRecipe: func.isRequired,
  removeRecipe: func.isRequired,
  addRecipe: func.isRequired,
}

export default RecipesBox
