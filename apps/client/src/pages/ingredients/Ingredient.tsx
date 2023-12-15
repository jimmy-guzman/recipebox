import { BoxItem, Button, Input } from '@recipe-box/components'
import { useState } from 'react'

import { trpc } from '../../trpc'
import { useRecipeId } from '../../hooks'

interface IngredientProps {
  id: string
  name: string
}

export const Ingredient = ({ name, id }: IngredientProps): JSX.Element => {
  const recipeId = useRecipeId()
  const utils = trpc.useUtils()
  const { mutate: deleteIngredient } = trpc.deleteIngredientById.useMutation({
    onSettled: async () => {
      await utils.recipeById.invalidate({ id: recipeId })
    },
  })
  const { mutate: updateIngredient } = trpc.updateIngredientById.useMutation({
    onSettled: async () => {
      await utils.recipeById.invalidate({ id: recipeId })
    },
  })
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
            updateIngredient({ id, name: newName })
          }
        }}
        isReadOnly
        canEdit
      />
      <Button
        variant='secondary'
        ariaLabel={`delete ${newName}`}
        onClick={(): void => {
          deleteIngredient({ id })
        }}
      >
        X
      </Button>
    </BoxItem>
  )
}
