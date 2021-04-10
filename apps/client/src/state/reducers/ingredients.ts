import produce from 'immer'

import { IngredientModel, IngredientsModel } from '../../models'

const recipeIngredients = produce(
  (draft: IngredientModel[], action): IngredientModel[] => {
    switch (action.type) {
      case 'ingredients/add':
        draft.push(action.payload)

        return draft
      case 'ingredients/remove': {
        draft.splice(action.payload.index, 1)

        return draft
      }
      case 'ingredients/update': {
        const { payload } = action

        draft[payload.index] = { ...draft[payload.index], name: payload.name }

        return draft
      }
      default:
        return draft
    }
  },
  []
)

export const ingredientsReducer = produce(
  (draft: IngredientsModel, action): IngredientsModel => {
    if (action.payload) {
      const {
        payload: { recipeId, ...payload },
        type,
      } = action

      return {
        ...draft,
        [recipeId]: recipeIngredients(draft[recipeId], { payload, type }),
      }
    }

    return draft
  },
  {}
)
