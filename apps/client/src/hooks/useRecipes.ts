import { useSelector } from 'react-redux'

import { AppState, RecipeModel } from '../types'

export const useRecipes = (): RecipeModel[] => {
  const recipes = useSelector<AppState, RecipeModel[]>((state) => state.recipes)

  return recipes
}
