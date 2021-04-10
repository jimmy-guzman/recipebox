import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useRecipeId } from '../hooks'
import { addIngredient } from '../state/actions/actionCreators'

const AddIngredientForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const recipeId = useRecipeId()
  const [name, setName] = useState('')

  const onNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
          onChange={onNameChange}
        />
      </form>
    </li>
  )
}

export default AddIngredientForm
