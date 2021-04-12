import React, { useState } from 'react'

import { useAppDispatch, useRecipeId } from '../hooks'
import { removeIngredient, updateIngredient } from '../state/actions'

interface IngredientProps {
  index: number
  name: string
}

const Ingredient = ({ name, index }: IngredientProps): JSX.Element => {
  const [isReadyOnly, setIsReadyOnly] = useState(true)
  const recipeId = useRecipeId()
  const dispatch = useAppDispatch()

  return (
    <li className='box__item'>
      <input
        value={name}
        onChange={(e): void => {
          dispatch(updateIngredient(recipeId, index, e.target.value))
        }}
        readOnly={isReadyOnly}
        onDoubleClick={(): void => {
          setIsReadyOnly(false)
        }}
        onBlur={(): void => {
          dispatch(updateIngredient(recipeId, index, name))
          setIsReadyOnly(true)
        }}
      />
      <button
        type='button'
        aria-label={`delete ${name}`}
        className='btn__secondary'
        onClick={(): void => {
          dispatch(removeIngredient(recipeId, index))
        }}
      >
        X
      </button>
    </li>
  )
}

export default Ingredient
