import { useState } from 'react'

import { IngredientModel } from '../../../common/models'
import { removeIngredient, updateIngredient } from '../actions'
import { useAppDispatch } from '../../../common/hooks'
import { BoxItem, Button, Input } from '../../../common/components'

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
