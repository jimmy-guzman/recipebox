import React from 'react'
import { useDispatch } from 'react-redux'

import { useRecipeId } from '../hooks'
import {
  removeIngredient,
  updateIngredient,
} from '../state/actions/actionCreators'

interface IngredientProps {
  index: number
  name: string
}

const Ingredient = (props: IngredientProps): JSX.Element => {
  const recipeId = useRecipeId()
  const dispatch = useDispatch()

  return (
    <li className='box__item'>
      <input
        value={props.name}
        onChange={(e): void => {
          dispatch(updateIngredient(recipeId, props.index, e.target.value))
        }}
        readOnly
        onDoubleClick={(e): void => {
          e.currentTarget.readOnly = false
        }}
        onBlur={(e): void => {
          e.currentTarget.readOnly = true
        }}
      />
      <button
        type='button'
        aria-label={`delete ${props.name}`}
        className='btn__secondary'
        onClick={(): void => {
          dispatch(removeIngredient(recipeId, props.index))
        }}
      >
        X
      </button>
    </li>
  )
}

export default Ingredient
