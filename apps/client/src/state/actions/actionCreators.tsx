import { createAction, nanoid } from '@reduxjs/toolkit'

export const removeRecipe = createAction('recipes/remove', (index: number) => {
  return { payload: index }
})

export const addRecipe = createAction('recipes/add', (name: string) => {
  return {
    payload: {
      name,
      id: nanoid(),
      createdAt: new Date().toISOString(),
    },
  }
})

export const updateRecipe = createAction(
  'recipes/update',
  (index: number, name: string) => {
    return { payload: { index, name } }
  }
)

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
