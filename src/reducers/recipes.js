import sampleRecipes from "../sampleRecipes";

const initialState = sampleRecipes;

function postRecipes(state = initialState, action) {
  switch (action.type) {
    case "ADD_RECIPE":
      // return the new state with the new recipe
      return [
        ...state,
        {
          name: action.name,
          ingredients: action.ingredients
        }
      ];
    case "REMOVE_RECIPE":
      // we need to return the new state without the deleted recipe
      return [
        // from the start to the one we want to delete
        ...state.slice(0, action.i),
        // after the deleted one, to the end
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
  return state;
}

function recipes(state = initialState, action) {
  if (typeof action.postId !== "undefined") {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.recipeId]: postRecipes(state[action.recipeId], action)
    };
  }
  return state;
}

export default recipes;
