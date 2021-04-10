import { nanoid } from 'nanoid'
import produce from 'immer'

import { RecipeModel } from '../../models'

export interface RecipesActions {
  index: number
  name: string
  type: 'ADD_RECIPE' | 'REMOVE_RECIPE' | 'UPDATE_RECIPE'
}

const recipes = produce(
  (draft: RecipeModel[], action: RecipesActions): RecipeModel[] => {
    switch (action.type) {
      case 'ADD_RECIPE': {
        draft.push({ id: nanoid(10), name: action.name })

        return draft
      }
      case 'REMOVE_RECIPE':
        draft.splice(action.index, 1)

        return draft
      case 'UPDATE_RECIPE':
        draft[action.index] = { ...draft[action.index], name: action.name }

        return draft
      default:
        return draft
    }
  },
  []
)

export default recipes
