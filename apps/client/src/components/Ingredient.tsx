import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { removeIngredient, updateIngredient } from '../actions/actionCreators'

interface IngredientProps {
  index: number
  name: string
}

const Ingredient = (props: IngredientProps): JSX.Element => {
  const { recipe } = useParams<{ recipe: string }>()
  const dispatch = useDispatch()

  return (
    <li className='box__item'>
      <input
        value={props.name}
        onChange={(e): void => {
          dispatch(updateIngredient(recipe, props.index, e.target.value))
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
          dispatch(removeIngredient(recipe, props.index))
        }}
      >
        X
      </button>
    </li>
  )
}

export default Ingredient
