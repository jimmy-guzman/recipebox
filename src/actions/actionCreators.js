export function removeRecipe(index) {
  return {
    type: "REMOVE_RECIPE",
    index
  };
}

export function addRecipe(name) {
  return {
    type: "ADD_RECIPE",
    name
  };
}

export function selectRecipe(index) {
  return {
    type: "SELECT_RECIPE",
    index
  };
}
export function updateRecipe(name, index) {
  return {
    type: "UPDATE_RECIPE",
    index,
    name
  };
}

export function addIngredient(recipeId, name) {
  return {
    type: "ADD_INGREDIENT",
    recipeId,
    name
  };
}
export function removeIngredient(recipeId, index) {
  return {
    type: "REMOVE_INGREDIENT",
    recipeId,
    index
  };
}
export function updateIngredient(recipeId, index, name) {
  return {
    type: "UPDATE_INGREDIENT",
    recipeId,
    index,
    name
  };
}
