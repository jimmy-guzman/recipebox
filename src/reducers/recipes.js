import sampleRecipes from "../Data/recipes";

const initialState = sampleRecipes;

function recipes(state = [], action) {
  switch (action.type) {
    case "ADD_RECIPE": {
      return [
        ...state,
        {
          recipeId: `recipe${Date.now()}`,
          name: action.name
        }
      ];
    }
    case "REMOVE_RECIPE":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case "UPDATE_RECIPE": {
      const updateRecipeList = state.recipes.map((recipe, index) => {
        if (index === action.index) {
          return {
            ...recipe,
            name: action.name
          };
        }
        return recipe;
      });
      return {
        ...state,
        recipes: updateRecipeList
      };
    }
    default:
      return state;
  }
}

export default recipes;
