import { createReducer } from '@reduxjs/toolkit'

import { RecipeModel } from '../../models'
import { addRecipe, removeRecipe, updateRecipe } from '../actions'

export const recipesReducer = createReducer<RecipeModel[]>([], (builder) => {
  builder
    .addCase(addRecipe, (draft, { payload }) => {
      draft.push(payload)
    })
    .addCase(removeRecipe, (draft, { payload }) => {
      draft.splice(payload, 1)
    })
    .addCase(updateRecipe, (draft, { payload }) => {
      draft[payload.index] = { ...draft[payload.index], name: payload.name }
    })
})
