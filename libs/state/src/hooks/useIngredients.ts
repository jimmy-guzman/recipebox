import { IngredientsModel } from '../models'
import { useAppSelector } from './useAppSelector'

export const useIngredients = (): IngredientsModel => {
  return useAppSelector((state) => state.ingredients)
}
