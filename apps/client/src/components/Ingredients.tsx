import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import AddIngredientForm from './AddIngredientForm'
import Ingredient from './Ingredient'
import { useIngredients, useRecipeId } from '../hooks'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 300 },
}

const Ingredients = (): JSX.Element => {
  const recipeId = useRecipeId()
  const ingredients = useIngredients()
  const recipeIngredients = ingredients[recipeId] ?? []

  return (
    <ul className='box__list'>
      <TransitionGroup component={null}>
        {recipeIngredients.map((ingredient, index) => (
          <CSSTransition {...transitionOptions} key={ingredient.id}>
            <Ingredient name={ingredient.name} index={index} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <AddIngredientForm />
    </ul>
  )
}

export default Ingredients
