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
  (id: string) => {
    return { payload: { id } }
  }
)

export const updateIngredient = createAction(
  'ingredients/update',
  (id: string, name: string) => {
    return { payload: { id, name } }
  }
)
