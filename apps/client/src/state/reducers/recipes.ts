import produce from 'immer'

import { RecipeModel } from '../../models'

export const recipesReducer = produce(
  (draft: RecipeModel[], action): RecipeModel[] => {
    switch (action.type) {
      case 'recipes/add': {
        draft.push(action.payload)

        return draft
      }
      case 'recipes/remove':
        draft.splice(action.payload, 1)

        return draft
      case 'recipes/update': {
        const { payload } = action

        draft[payload.index] = {
          ...draft[payload.index],
          name: payload.name,
        }

        return draft
      }
      default:
        return draft
    }
  },
  []
)
