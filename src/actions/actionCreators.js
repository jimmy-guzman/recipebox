// remove recipe
export function removeRecipe(index) {
  return {
    type: "REMOVE_RECIPE",
    index
  };
}

// add recipe

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
