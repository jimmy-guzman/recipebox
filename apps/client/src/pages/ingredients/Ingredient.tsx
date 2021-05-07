import { useDeleteIngredient, useUpdateIngredient } from '@recipe-box/bridge'
import { BoxItem, Button, Input } from '@recipe-box/components'
import { useState } from 'react'

interface IngredientProps {
  id: string
  name: string
}

export const Ingredient = ({ name, id }: IngredientProps): JSX.Element => {
  const { mutate: deleteIngredient } = useDeleteIngredient()
  const { mutate: updateIngredient } = useUpdateIngredient(id)
  const [newName, setNewName] = useState(() => name)

  return (
    <BoxItem>
      <Input
        isFullWidth
        value={newName}
        onChange={(e): void => {
          setNewName(e.target.value)
        }}
        onBlur={(): void => {
          if (newName) {
            updateIngredient({ name: newName })
          }
        }}
        isReadOnly
        canEdit
      />
      <Button
        variant='secondary'
        ariaLabel={`delete ${newName}`}
        onClick={(): void => {
          deleteIngredient(id)
        }}
      >
        X
      </Button>
    </BoxItem>
  )
}
