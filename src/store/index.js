import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import ingredients from '../Data/ingredients'
import recipes from '../Data/recipes'
import rootReducer from '../reducers/index'

export const history = createHistory()
const middleware = routerMiddleware(history)

const defaultState = {
  recipes,
  ingredients,
}

const persistConfig = {
  key: 'recipeBox',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  defaultState,
  applyMiddleware(middleware)
)

export const persistor = persistStore(store)
