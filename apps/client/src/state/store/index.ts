import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import ingredients from '../data/ingredients'
import recipes from '../data/recipes'
import { rootReducer } from '../reducers'
import { AppState } from '../../models'

export const history = createBrowserHistory()
const middleware = routerMiddleware(history)

const defaultState: Omit<AppState, 'router'> = { ingredients, recipes }

const persistConfig = { key: 'recipeBox', storage }

const persistedReducer = persistReducer(persistConfig, rootReducer(history))

export const store = createStore(
  persistedReducer,
  defaultState,
  composeWithDevTools(applyMiddleware(middleware))
)

export const persistor = persistStore(store)
