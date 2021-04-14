import { createReducer } from '@reduxjs/toolkit'

import { RecipeModel } from '../../common/models'
import { addIngredient, addRecipe, removeRecipe, updateRecipe } from './actions'
import { recipes } from './data/recipes'

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
      .addCase(addIngredient, (draft, { payload }) => {
        draft[payload.recipeId].ingredients.push(payload.id)
      })
  }
)
