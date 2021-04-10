import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addRecipe } from '../actions/actionCreators'

const AddRecipeForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const onNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch(addRecipe(name))
    setName('')
  }

  return (
    <li className='box__item'>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type='text'
          placeholder='new recipe'
          onChange={onNameChange}
        />
      </form>
    </li>
  )
}

export default AddRecipeForm
