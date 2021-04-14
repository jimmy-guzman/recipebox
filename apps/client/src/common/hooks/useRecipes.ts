import { RecipeModel } from '../models'
import { useAppSelector } from './useAppSelector'

export const useRecipes = (): Record<string, RecipeModel> => {
  return useAppSelector((state) => state.recipes)
}
