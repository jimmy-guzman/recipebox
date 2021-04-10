export interface IngredientModel {
  id: string
  name: string
}

export interface RecipeModel {
  id: string
  name: string
}

export type IngredientsModel = Record<string, IngredientModel[] | undefined>
