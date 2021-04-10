import { useSelector } from 'react-redux'

import { AppState, IngredientsModel } from '../types'

export const useIngredients = (): IngredientsModel => {
  const ingredients = useSelector<AppState, IngredientsModel>(
    (state) => state.ingredients
  )

  return ingredients
}
