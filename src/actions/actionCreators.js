// remove recipe
export function removeRecipe(recipeId, i) {
  return {
    type: "REMOVE_RECIPE",
    postId,
    i
  };
}

// add recipe

export function addRecipe(recipeId, name, ingredients) {
  return {
    type: "REMOVE_COMMENT",
    recipeId,
    name,
    ingredients
  };
}
