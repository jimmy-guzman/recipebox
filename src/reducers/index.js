import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import recipes from './recipes'
import ingredients from './ingredients'

const rootReducer = (history) =>
  combineReducers({
    recipes,
    ingredients,
    router: connectRouter(history),
  })

export default rootReducer
