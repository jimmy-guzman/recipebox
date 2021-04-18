import { ChangeEvent, FormEvent, useState } from 'react'

import { BoxItem, Input } from '../../../common/components'
import { useAppDispatch } from '../../../common/hooks'
import { addRecipe } from '../actions'

export const AddRecipeForm = (): JSX.Element => {
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
    <BoxItem>
      <form onSubmit={handleSubmit}>
        <Input
          isFullWidth
          value={name}
          placeholder='new recipe'
          onChange={onNameChange}
        />
      </form>
    </BoxItem>
  )
}
