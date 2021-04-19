import { BoxItem, Button, Input } from '@recipe-box/components'
import {
  removeIngredient,
  updateIngredient,
  useAppDispatch,
} from '@recipe-box/state'

interface IngredientProps {
  id: string
  name: string
}

export const Ingredient = ({ name, id }: IngredientProps): JSX.Element => {
  const dispatch = useAppDispatch()

  return (
    <BoxItem>
      <Input
        isFullWidth
        value={name}
        onChange={(e): void => {
          dispatch(updateIngredient(id, e.target.value))
        }}
        isReadOnly
        canEdit
      />
      <Button
        variant='secondary'
        ariaLabel={`delete ${name}`}
        onClick={(): void => {
          dispatch(removeIngredient(id))
        }}
      >
        X
      </Button>
    </BoxItem>
  )
}
