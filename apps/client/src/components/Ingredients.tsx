import React from 'react'
import { arrayOf, shape, string, number } from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useParams } from 'react-router-dom'

import AddIngredientForm from './AddIngredientForm'
import Ingredient from './Ingredient'
import { useIngredients } from '../hooks'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 300 },
}

const Ingredients = (): JSX.Element => {
  const { recipe } = useParams<{ recipe: string }>()
  const ingredients = useIngredients()
  const recipeIngredients = ingredients[recipe] ?? []

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

Ingredients.propTypes = {
  recipeIngredients: arrayOf(shape({ name: string, id: number })),
}

export default Ingredients
