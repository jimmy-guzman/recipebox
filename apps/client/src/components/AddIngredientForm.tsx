import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { addIngredient } from '../actions/actionCreators'

const AddIngredientForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const { recipe } = useParams<{ recipe: string }>()
  const [name, setName] = useState('')

  const onNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch(addIngredient(recipe, name))
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
