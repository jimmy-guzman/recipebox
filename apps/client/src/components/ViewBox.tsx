import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import BackIcon from './SVGs/BackIcon'
import Ingredients from './Ingredients'
import { updateRecipe } from '../state/actions'
import { useAppDispatch, useRecipeId, useRecipes } from '../hooks'

export const ViewBox = (): JSX.Element => {
  const recipeId = useRecipeId()
  const recipes = useRecipes()
  const dispatch = useAppDispatch()
  const [isReadyOnly, setIsReadyOnly] = useState(true)

  const i = recipes.findIndex((recipe) => recipe.id === recipeId)

  return (
    <div className='box__container  grid__col--6'>
      <header className='box__header'>
        <input
          value={recipes[i].name}
          onChange={(e): void => {
            dispatch(updateRecipe(i, e.target.value))
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
      <Ingredients />
    </div>
  )
}
