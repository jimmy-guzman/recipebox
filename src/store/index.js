import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import ingredients from '../Data/ingredients'
import recipes from '../Data/recipes'

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

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
