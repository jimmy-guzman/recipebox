import sampleRecipes from "../sampleRecipes";

const initialState = sampleRecipes;

function recipes(state = initialState, action) {
  switch (action.type) {
    case "ADD_RECIPE": {
      console.log("adding");
      const addRecipesList = [
        ...state.recipes,
        {
          name: action.name,
          ingredients: []
        }
      ];
      return {
        ...state,
        recipes: addRecipesList
      };
    }
    case "REMOVE_RECIPE":
      const removeRecipesList = [
        ...state.recipes.slice(0, action.index),
        ...state.recipes.slice(action.index + 1)
      ];
      return {
        ...state,
        recipes: removeRecipesList
      };
    case "SELECT_RECIPE":
      return {
        ...state,
        selectedRecipeIndex: action.index
      };
    default:
      return state;
  }
}

export default recipes;
