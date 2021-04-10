import { CombinedState, combineReducers, Reducer } from 'redux'

import recipes, { RecipesActions } from './recipes'
import ingredients, { IngredientActions } from './ingredients'
import { AppState } from '../../models'

export const rootReducer = (): Reducer<
  CombinedState<AppState>,
  RecipesActions | IngredientActions
> => {
  return combineReducers({
    recipes,
    ingredients,
  })
}
