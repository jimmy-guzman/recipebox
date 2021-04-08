import React from 'react'
import { arrayOf, shape, string, number } from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Ingredient from './Ingredient'
import AddIngredientForm from './AddIngredientForm'

const Ingredients = (props) => {
  const transitionOptions = {
    classNames: 'slide-left',
    timeout: { enter: 500, exit: 300 },
  }

  return (
    <TransitionGroup component='ul' className='box__list'>
      {props.recipeIngredients.map((ingredient, index) => (
        <CSSTransition {...transitionOptions} key={ingredient.id}>
          <Ingredient name={ingredient.name} index={index} {...props} />
        </CSSTransition>
      ))}
      <AddIngredientForm {...props} />
    </TransitionGroup>
  )
}

Ingredients.propTypes = {
  recipeIngredients: arrayOf(shape({ name: string, id: number })),
}

export default Ingredients
