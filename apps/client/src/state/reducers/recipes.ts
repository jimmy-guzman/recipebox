import { RecipeModel } from '../../models'

export interface RecipesActions {
  index: number
  name: string
  type: 'ADD_RECIPE' | 'REMOVE_RECIPE' | 'UPDATE_RECIPE'
}

function recipes(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: RecipeModel[] = [],
  action: RecipesActions
): RecipeModel[] {
  switch (action.type) {
    case 'ADD_RECIPE': {
      return [
        ...state,
        {
          recipeId: `recipe${Date.now()}`,
          name: action.name,
        },
      ]
    }
    case 'REMOVE_RECIPE':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)]

    case 'UPDATE_RECIPE':
      return [
        ...state.slice(0, action.index),
        { ...state[action.index], name: action.name },
        ...state.slice(action.index + 1),
      ]
    default:
      return state
  }
}

export default recipes
