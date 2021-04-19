import { createReducer } from '@reduxjs/toolkit'

import { IngredientsModel } from '../models'
import { addRecipeIngredient } from '../recipes/actions'
import { removeIngredient, updateIngredient } from './actions'
import { ingredients } from './ingredients'

export const ingredientsReducer = createReducer<IngredientsModel>(
  ingredients,
  (builder) => {
    builder
      .addCase(addRecipeIngredient, (draft, { payload }) => {
        draft[payload.id] = payload
      })
      .addCase(removeIngredient, (draft, { payload }) => {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete draft[payload.id]
      })
      .addCase(updateIngredient, (draft, { payload }) => {
        draft[payload.id].name = payload.name
      })
  }
)
