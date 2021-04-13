import { createReducer } from '@reduxjs/toolkit'

import { IngredientsModel } from '../../common/models'
import { addIngredient, removeIngredient, updateIngredient } from './actions'
import { ingredients } from './data/ingredients'

export const ingredientsReducer = createReducer<IngredientsModel>(
  ingredients,
  (builder) => {
    builder
      .addCase(addIngredient, (draft, { payload }) => {
        draft[payload.recipeId] = draft[payload.recipeId] ?? []
        draft[payload.recipeId]?.push(payload)
      })
      .addCase(removeIngredient, (draft, { payload }) => {
        draft[payload.recipeId]?.splice(payload.index, 1)
      })
      .addCase(updateIngredient, (draft, { payload }) => {
        const recipe = draft[payload.recipeId]

        if (recipe?.length) {
          recipe[payload.index] = {
            ...recipe[payload.index],
            name: payload.name,
          }
        }
      })
  }
)
