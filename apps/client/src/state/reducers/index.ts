import { CombinedState, combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import recipes from './recipes'
import ingredients from './ingredients'
import { AppState } from '../../models'

export const rootReducer = (
  history: History
): Reducer<CombinedState<AppState>> => {
  return combineReducers({
    recipes,
    ingredients,
    router: connectRouter(history),
  })
}
