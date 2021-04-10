/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function removeRecipe(index: number) {
  return {
    type: 'REMOVE_RECIPE',
    index,
  }
}

export function addRecipe(name: string) {
  return {
    type: 'ADD_RECIPE',
    name,
  }
}

export function updateRecipe(index: number, name: string) {
  return {
    type: 'UPDATE_RECIPE',
    index,
    name,
  }
}

export function addIngredient(recipeId: string, name: string) {
  return {
    type: 'ADD_INGREDIENT',
    recipeId,
    name,
  }
}
export function removeIngredient(recipeId: string, index: number) {
  return {
    type: 'REMOVE_INGREDIENT',
    recipeId,
    index,
  }
}
export function updateIngredient(
  recipeId: string,
  index: number,
  name: string
) {
  return {
    type: 'UPDATE_INGREDIENT',
    recipeId,
    index,
    name,
  }
}
