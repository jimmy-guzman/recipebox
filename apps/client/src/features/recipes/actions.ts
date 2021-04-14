import { createAction, nanoid } from '@reduxjs/toolkit'

export const removeRecipe = createAction('recipes/remove', (id: string) => {
  return { payload: { id } }
})

export const addRecipe = createAction('recipes/add', (name: string) => {
  return {
    payload: {
      name,
      id: nanoid(),
      createdAt: new Date().toISOString(),
      ingredients: [],
    },
  }
})

export const updateRecipe = createAction(
  'recipes/update',
  (id: string, name: string) => {
    return { payload: { id, name } }
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
      },
    }
  }
)
