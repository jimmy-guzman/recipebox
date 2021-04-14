import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Ingredient, AddIngredientForm } from './components'
import {
  useRecipeId,
  useRecipes,
  useAppDispatch,
  useRecipeIngredients,
} from '../../common/hooks'
import { BackIcon } from '../../common/components'
import { updateRecipe } from '../recipes/actions'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 300 },
}

export const Ingredients = (): JSX.Element => {
  const recipeId = useRecipeId()
  const recipes = useRecipes()
  const recipeIngredients = useRecipeIngredients(recipeId)
  const dispatch = useAppDispatch()
  const [isReadyOnly, setIsReadyOnly] = useState(true)

  return (
    <div className='box__container grid__col--6'>
      <header className='box__header'>
        <input
          value={recipes[recipeId].name}
          onChange={(e): void => {
            dispatch(updateRecipe(recipeId, e.target.value))
          }}
          readOnly={isReadyOnly}
          onDoubleClick={(): void => {
            setIsReadyOnly(false)
          }}
          onBlur={(): void => {
            setIsReadyOnly(true)
          }}
        />
        <Link to='/' role='link' aria-label='back'>
          <BackIcon height={24} width={24} />
        </Link>
      </header>
      <ul className='box__list'>
        <TransitionGroup component={null}>
          {recipeIngredients.map((ingredient) => (
            <CSSTransition {...transitionOptions} key={ingredient.id}>
              <Ingredient {...ingredient} />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <AddIngredientForm />
      </ul>
    </div>
  )
}