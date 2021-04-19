import { useState } from 'react'

import { Input } from '../../atoms'
import { BoxItem } from '../BoxItem'

interface AddItemFormProps {
  addItem: (name: string) => void
  itemName: string
}

// ? molecule vs organism
export const AddItemForm = ({
  addItem,
  itemName,
}: AddItemFormProps): JSX.Element => {
  const [name, setName] = useState('')

  return (
    <BoxItem>
      <form
        onSubmit={(e): void => {
          e.preventDefault()
          addItem(name)
          setName('')
        }}
      >
        <Input
          isFullWidth
          value={name}
          placeholder={`new ${itemName}`}
          onChange={(e): void => {
            setName(e.target.value)
          }}
        />
      </form>
    </BoxItem>
  )
}
