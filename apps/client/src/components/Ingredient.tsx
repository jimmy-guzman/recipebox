import { Button, Input } from '@recipe-box/components'
import { useState } from 'react'

import { trpc } from '../trpc'
import { useRecipeId } from '../hooks'

interface IngredientProps {
  id: string
  name: string
}

export const Ingredient = ({ name, id }: IngredientProps): JSX.Element => {
  const recipeId = useRecipeId()
  const utils = trpc.useUtils()
  const { mutate: deleteIngredient } = trpc.ingredient.remove.useMutation({
    onSettled: async () => {
      await utils.recipe.byId.invalidate({ id: recipeId })
    },
  })
  const { mutate: updateIngredient } = trpc.ingredient.update.useMutation({
    onSettled: async () => {
      await utils.recipe.byId.invalidate({ id: recipeId })
    },
  })
  const [newName, setNewName] = useState(() => name)

  return (
    <>
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
    </>
  )
}
