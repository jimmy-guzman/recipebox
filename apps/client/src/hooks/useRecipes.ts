import { RecipeModel } from '../models'
import { useAppSelector } from './useAppSelector'

export const useRecipes = (): RecipeModel[] => {
  return useAppSelector((state) => state.recipes)
}
