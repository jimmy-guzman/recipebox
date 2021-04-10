import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import BackIcon from './SVGs/BackIcon'
import Ingredients from './Ingredients'
import { updateRecipe } from '../state/actions/actionCreators'
import { useRecipeId, useRecipes } from '../hooks'

export const ViewBox = (): JSX.Element => {
  const recipeId = useRecipeId()
  const recipes = useRecipes()
  const dispatch = useDispatch()

  const i = recipes.findIndex((recipe) => recipe.recipeId === recipeId)

  return (
    <div className='box__container  grid__col--6'>
      <header className='box__header'>
        <input
          value={recipes[i].name}
          onChange={(e): void => {
            dispatch(updateRecipe(i, e.target.value))
          }}
          readOnly
          onDoubleClick={(e): void => {
            e.currentTarget.readOnly = false
          }}
          onBlur={(e): void => {
            e.currentTarget.readOnly = true
          }}
        />
        <Link to='/' role='link' aria-label='back'>
          <BackIcon height={24} width={24} />
        </Link>
      </header>
      <Ingredients />
    </div>
  )
}
