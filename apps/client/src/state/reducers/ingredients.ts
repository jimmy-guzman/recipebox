import { nanoid } from 'nanoid'
import produce from 'immer'

import { IngredientModel, IngredientsModel } from '../../models'

export interface IngredientActions {
  index: number
  name: string
  recipeId: string
  type: 'ADD_INGREDIENT' | 'REMOVE_INGREDIENT' | 'UPDATE_INGREDIENT'
}

const recipeIngredients = produce(
  (draft: IngredientModel[], action: IngredientActions): IngredientModel[] => {
    switch (action.type) {
      case 'ADD_INGREDIENT':
        draft.push({ name: action.name, id: nanoid(10) })

        return draft
      case 'REMOVE_INGREDIENT': {
        draft.splice(action.index, 1)

        return draft
      }
      case 'UPDATE_INGREDIENT': {
        draft[action.index] = { ...draft[action.index], name: action.name }

        return draft
      }
      default:
        return draft
    }
  },
  []
)

const ingredients = produce(
  (draft: IngredientsModel, action: IngredientActions): IngredientsModel => {
    if (typeof action.recipeId !== 'undefined') {
      return {
        ...draft,
        [action.recipeId]: recipeIngredients(draft[action.recipeId], action),
      }
    }
    return draft
  },
  {}
)

export default ingredients
