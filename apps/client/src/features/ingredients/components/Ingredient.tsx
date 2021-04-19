import { useState } from 'react'
import { BoxItem, Button, Input } from '@recipe-box/components'
import {
  IngredientModel,
  removeIngredient,
  updateIngredient,
  useAppDispatch,
} from '@recipe-box/state'

type IngredientProps = IngredientModel

export const Ingredient = ({ name, id }: IngredientProps): JSX.Element => {
  const [isReadyOnly, setIsReadyOnly] = useState(true)
  const dispatch = useAppDispatch()

  return (
    <BoxItem>
      <Input
        isFullWidth
        value={name}
        onChange={(e): void => {
          dispatch(updateIngredient(id, e.target.value))
        }}
        isReadOnly={isReadyOnly}
        onDoubleClick={(): void => {
          setIsReadyOnly(false)
        }}
        onBlur={(): void => {
          setIsReadyOnly(true)
        }}
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
