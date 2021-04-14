import React, { ChangeEvent, FormEvent, useState } from 'react'

import { useRecipeId, useAppDispatch } from '../../../common/hooks'
import { addIngredient } from '../actions'

export const AddIngredientForm = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const recipeId = useRecipeId()
  const [name, setName] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch(addIngredient(recipeId, name))
    setName('')
  }

  return (
    <li className='box__item'>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type='text'
          placeholder='new ingredient'
          onChange={handleChange}
        />
      </form>
    </li>
  )
}