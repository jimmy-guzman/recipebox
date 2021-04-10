export interface IngredientModel {
  id: number
  name: string
}

export interface RecipeModel {
  name: string
  recipeId: string
}

export type IngredientsModel = Record<string, IngredientModel[] | undefined>

export interface AppState {
  ingredients: IngredientsModel
  recipes: RecipeModel[]
}
