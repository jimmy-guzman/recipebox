import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

import ingredients from '../data/ingredients'
import recipes from '../data/recipes'
import { rootReducer } from '../reducers'
import { AppState } from '../../models'

const defaultState: AppState = { ingredients, recipes }

const persistConfig = { key: 'recipeBox', storage }

const persistedReducer = persistReducer(persistConfig, rootReducer())

export const store = createStore(
  persistedReducer,
  defaultState,
  composeWithDevTools(applyMiddleware())
)

export const persistor = persistStore(store)
