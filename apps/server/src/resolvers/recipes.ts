/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PrismaClient } from '@prisma/client'

import {
  MutationCreateRecipeArgs,
  MutationUpdateRecipeArgs,
  MutationDeleteRecipeArgs,
  QueryRecipeArgs,
} from '../generated/graphql'

const prisma = new PrismaClient()

export const recipes = {
  Query: {
    recipe: async (_: unknown, { id }: QueryRecipeArgs) => {
      const recipe = await prisma.recipe.findUnique({
        where: { id: parseInt(id, 10) },
      })

      if (recipe) return recipe

      throw new Error(`Recipe w/ id of ${id} was not found!`)
    },
    recipes: async () => prisma.recipe.findMany(),
  },
  Mutation: {
    createRecipe: async (
      _: unknown,
      { name, userId }: MutationCreateRecipeArgs
    ) => {
      return prisma.recipe.create({
        data: { name, userId: parseInt(userId, 10) },
      })
    },
    deleteRecipe: async (_: unknown, { id }: MutationDeleteRecipeArgs) => {
      return prisma.recipe.delete({ where: { id: parseInt(id, 10) } })
    },
    updateRecipe: async (
      _: unknown,
      { id, name }: MutationUpdateRecipeArgs
    ) => {
      return prisma.recipe.update({
        where: { id: parseInt(id, 10) },
        data: { name },
      })
    },
  },
}
