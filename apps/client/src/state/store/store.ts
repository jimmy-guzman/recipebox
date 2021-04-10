import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { ingredients, recipes } from '../data'
import { ingredientsReducer, recipesReducer } from '../reducers'

const persistConfig = { key: 'recipeBox', storage }

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    recipes: recipesReducer,
    ingredients: ingredientsReducer,
  })
)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: { ingredients, recipes },
  middleware: getDefaultMiddleware({
    serializableCheck: { ignoredActions: ['persist/PERSIST'] },
  }),
})

export const persistor = persistStore(store)
