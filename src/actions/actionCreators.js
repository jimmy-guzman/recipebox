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

export function addIngredient(name, index) {
  return {
    type: "ADD_INGREDIENT",
    name,
    index
  };
}
export function removeIngredient(recipeIndex, index) {
  return {
    type: "REMOVE_INGREDIENT",
    recipeIndex,
    index
  };
}
export function updateIngredient(recipeIndex, index, name) {
  return {
    type: "UPDATE_INGREDIENT",
    recipeIndex,
    index,
    name
  };
}
