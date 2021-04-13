import { createAction, nanoid } from '@reduxjs/toolkit'

export const addIngredient = createAction(
  'ingredients/add',
  (recipeId: string, name: string) => {
    return {
      payload: {
        name,
        recipeId,
        id: nanoid(),
        createdAt: new Date().toISOString(),
      },
    }
  }
)

export const removeIngredient = createAction(
  'ingredients/remove',
  (recipeId: string, index: number) => {
    return { payload: { recipeId, index } }
  }
)

export const updateIngredient = createAction(
  'ingredients/update',
  (recipeId: string, index: number, name: string) => {
    return { payload: { recipeId, index, name } }
  }
)
