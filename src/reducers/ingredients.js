import sampleIngredients from "../Data/ingredients";

const initialState = sampleIngredients;

function recipeIngredients(state = [], action) {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return [...state, action.name];

    case "REMOVE_INGREDIENT": {
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    }
    case "UPDATE_INGREDIENT": {
      return [
        ...state.slice(0, action.index),
        action.name,
        ...state.slice(action.index + 1)
      ];
    }
    default:
      return state;
  }
  return state;
}

function ingredients(state = [], action) {
  if (typeof action.recipeId !== "undefined") {
    return {
      ...state,
      [action.recipeId]: recipeIngredients(state[action.recipeId], action)
    };
  }
  return state;
}

export default ingredients;
