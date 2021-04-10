import { IngredientModel, IngredientsModel } from '../types'

interface Action {
  index: number
  name: string
  recipeId: string
  type: 'ADD_INGREDIENT' | 'REMOVE_INGREDIENT' | 'UPDATE_INGREDIENT'
}

function recipeIngredients(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: IngredientModel[] = [],
  action: Action
): IngredientModel[] {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [...state, { name: action.name, id: Date.now() }]

    case 'REMOVE_INGREDIENT': {
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
    }
    case 'UPDATE_INGREDIENT': {
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], name: action.name },
        ...state.slice(action.index + 1),
      ]
    }
    default:
      return state
  }
}

function ingredients(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: IngredientsModel = {},
  action: Action
): IngredientsModel {
  if (typeof action.recipeId !== 'undefined') {
    return {
      ...state,
      [action.recipeId]: recipeIngredients(state[action.recipeId], action),
    }
  }
  return state
}

export default ingredients
