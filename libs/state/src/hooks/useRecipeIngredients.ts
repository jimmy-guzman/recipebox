import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { RecipeModel, IngredientsModel, IngredientModel } from '../models'
import { useAppSelector } from './useAppSelector'

const recipeSelector = (state: RootState, id: string): RecipeModel => {
  return state.recipes[id]
}
const ingredientsSelector = (state: RootState): IngredientsModel => {
  return state.ingredients
}

const makeRecipeIngredients = createSelector(
  recipeSelector,
  ingredientsSelector,
  (recipe, ingredients) => {
    return Object.values(ingredients).filter((ingredient) => {
      return recipe.ingredients.includes(ingredient.id)
    })
  }
)

export const useRecipeIngredients = (recipeId: string): IngredientModel[] => {
  return useAppSelector((state) => makeRecipeIngredients(state, recipeId))
}
