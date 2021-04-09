import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import ingredients from '../Data/ingredients'
import recipes from '../Data/recipes'
import rootReducer from '../reducers'

export const history = createBrowserHistory()
const middleware = routerMiddleware(history)

const defaultState = {
  recipes,
  ingredients,
}

const persistConfig = {
  key: 'recipeBox',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer(history))

export const store = createStore(
  persistedReducer,
  defaultState,
  applyMiddleware(middleware)
)

export const persistor = persistStore(store)
