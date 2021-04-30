import { nanoid } from 'nanoid'
import { GraphQLDateTime } from 'graphql-iso-date'

import {
  MutationCreateRecipeArgs,
  MutationUpdateRecipeArgs,
  MutationDeleteRecipeArgs,
  MutationCreateIngredientArgs,
  Recipe,
  Ingredient,
  QueryRecipeArgs,
} from '../generated/graphql'
import { ingredientsDb, recipesDb } from './mock-db'

const resolvers = {
  Date: GraphQLDateTime,
  Query: {
    recipe: (_: unknown, { id }: QueryRecipeArgs): Recipe => {
      const recipe = recipesDb.recipes.find((i) => i.id === id)

      if (recipe) {
        return recipe
      }

      throw new Error(`Recipe w/ id of ${id} was not found!`)
    },
    recipes: (): Recipe[] => recipesDb.recipes,
    ingredients: (): Ingredient[] => ingredientsDb.ingredients,
  },
  Mutation: {
    createRecipe(_: unknown, { title }: MutationCreateRecipeArgs): Recipe {
      const item = {
        id: nanoid(),
        title,
        createdAt: new Date(Date.now()),
        ingredients: [],
      }

      recipesDb.recipes.push(item)

      return item
    },
    createIngredient(
      _: unknown,
      { title, recipeId }: MutationCreateIngredientArgs
    ): Ingredient {
      const id = nanoid()
      const recipe = recipesDb.recipes.find((i) => i.id === recipeId)
      const ingredient = {
        id,
        title,
        createdAt: new Date(Date.now()),
      }

      if (recipe) {
        ingredientsDb.ingredients.push(ingredient)
        ;(recipe as Recipe).updatedAt = new Date(Date.now())
        ;(recipe as Recipe).ingredients.push(id)
      }

      return ingredient
    },
    updateRecipe(_: unknown, { id, title }: MutationUpdateRecipeArgs): Recipe {
      const item = recipesDb.recipes.find((i) => i.id === id)

      if (item && title) {
        item.title = title
        ;(item as Recipe).updatedAt = new Date(Date.now())

        return item
      }
      throw new Error('Id not found')
    },
    deleteRecipe(_: unknown, { id }: MutationDeleteRecipeArgs): string {
      const idx = recipesDb.recipes.findIndex((i) => i.id === id)

      if (idx !== -1) {
        recipesDb.recipes.splice(idx, 1)
        return `Item ${id} deleted with success`
      }
      throw new Error('Id not found')
    },
  },
}

export default resolvers
