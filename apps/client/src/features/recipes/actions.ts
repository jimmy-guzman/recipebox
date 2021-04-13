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
