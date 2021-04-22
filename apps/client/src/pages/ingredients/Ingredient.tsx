import { BoxItem, Button, Input } from '@recipe-box/components'
import { useUpdateIngredient, useRemoveIngredient } from '@recipe-box/state'

interface IngredientProps {
  id: string
  name: string
}

export const Ingredient = ({ name, id }: IngredientProps): JSX.Element => {
  const removeIngredient = useRemoveIngredient(id)
  const updateIngredient = useUpdateIngredient(id)

  return (
    <BoxItem>
      <Input
        isFullWidth
        value={name}
        onChange={(e): void => {
          updateIngredient(e.target.value)
        }}
        isReadOnly
        canEdit
      />
      <Button
        variant='secondary'
        ariaLabel={`delete ${name}`}
        onClick={removeIngredient}
      >
        X
      </Button>
    </BoxItem>
  )
}
