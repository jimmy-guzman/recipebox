import sampleRecipes from "../sampleRecipes";

const initialState = sampleRecipes;

function recipes(state = initialState, action) {
  switch (action.type) {
    case "ADD_RECIPE": {
      const addRecipesList = [
        ...state.recipes,
        {
          name: action.name,
          ingredients: [],
          recipeId: Date.now()
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
    case "ADD_INGREDIENT": {
      const addIngredientList = state.recipes.map((recipe, index) => {
        if (index === action.index) {
          return {
            ...recipe,
            ingredients: [...recipe.ingredients, action.name]
          };
        }
        return recipe;
      });
      return {
        ...state,
        recipes: addIngredientList
      };
    }
    case "REMOVE_INGREDIENT": {
      const removeIngredientList = state.recipes.map((recipe, index) => {
        if (index === action.recipeIndex) {
          return {
            ...recipe,
            ingredients: [
              ...recipe.ingredients.slice(0, action.index),
              ...recipe.ingredients.slice(action.index + 1)
            ]
          };
        }
        return recipe;
      });
      return {
        ...state,
        recipes: removeIngredientList
      };
    }
    case "UPDATE_INGREDIENT": {
      const updateIngredientList = state.recipes.map((recipe, index) => {
        if (index === action.recipeIndex) {
          return {
            ...recipe,
            ingredients: [
              ...recipe.ingredients.slice(0, action.index),
              action.name,
              ...recipe.ingredients.slice(action.index + 1)
            ]
          };
        }
        return recipe;
      });
      return {
        ...state,
        recipes: updateIngredientList
      };
    }
    default:
      return state;
  }
}

export default recipes;
