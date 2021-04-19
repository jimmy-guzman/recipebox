import { createReducer } from '@reduxjs/toolkit'

import { RecipeModel } from '../models'
import {
  addRecipeIngredient,
  addRecipe,
  removeRecipe,
  updateRecipe,
} from './actions'
import { recipes } from './recipes'

export const recipesReducer = createReducer<Record<string, RecipeModel>>(
  recipes,
  (builder) => {
    builder
      .addCase(addRecipe, (draft, { payload }) => {
        draft[payload.id] = payload
      })
      .addCase(removeRecipe, (draft, { payload }) => {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete draft[payload.id]
      })
      .addCase(updateRecipe, (draft, { payload }) => {
        draft[payload.id].name = payload.name
      })
      .addCase(addRecipeIngredient, (draft, { payload }) => {
        draft[payload.recipeId].ingredients.push(payload.id)
      })
  }
)
