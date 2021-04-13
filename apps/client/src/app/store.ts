import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { recipesReducer, ingredientsReducer } from '../features'

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
  middleware: getDefaultMiddleware({
    serializableCheck: { ignoredActions: ['persist/PERSIST'] },
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
