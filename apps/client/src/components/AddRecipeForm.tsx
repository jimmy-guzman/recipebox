import React, { ChangeEvent, FormEvent, useState } from 'react'

import { useAppDispatch } from '../hooks'
import { addRecipe } from '../state/actions'

const AddRecipeForm = (): JSX.Element => {
  const dispatch = useAppDispatch()
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
