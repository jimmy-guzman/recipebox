import React, { useState } from 'react'

import { IngredientModel } from '../../../common/models'
import { removeIngredient, updateIngredient } from '../actions'
import { useAppDispatch } from '../../../common/hooks'

type IngredientProps = IngredientModel

export const Ingredient = ({ name, id }: IngredientProps): JSX.Element => {
  const [isReadyOnly, setIsReadyOnly] = useState(true)
  const dispatch = useAppDispatch()

  return (
    <li className='box__item'>
      <input
        value={name}
        onChange={(e): void => {
          dispatch(updateIngredient(id, e.target.value))
        }}
        readOnly={isReadyOnly}
        onDoubleClick={(): void => {
          setIsReadyOnly(false)
        }}
        onBlur={(): void => {
          setIsReadyOnly(true)
        }}
      />
      <button
        type='button'
        aria-label={`delete ${name}`}
        className='btn__secondary'
        onClick={(): void => {
          dispatch(removeIngredient(id))
        }}
      >
        X
      </button>
    </li>
  )
}
