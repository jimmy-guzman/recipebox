/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import {
  MutationCreateRecipeArgs,
  MutationUpdateRecipeArgs,
  MutationDeleteRecipeArgs,
  QueryRecipeArgs,
} from '@recipe-box/types'
import { PrismaClient } from '@prisma/client'

interface Context {
  prisma: PrismaClient
}

export const recipes = {
  Query: {
    recipe: async (_: unknown, { id }: QueryRecipeArgs, ctx: Context) => {
      const recipe = await ctx.prisma.recipe.findUnique({
        where: { id },
        include: { ingredients: true },
      })

      if (recipe) return recipe

      throw new Error(`Recipe with an id of ${id} was not found`)
    },
    recipes: async (_parent: unknown, _args: unknown, ctx: Context) => {
      return ctx.prisma.recipe.findMany({
        orderBy: { createdAt: 'asc' },
        include: { ingredients: { orderBy: { createdAt: 'asc' } } },
      })
    },
  },
  Mutation: {
    createRecipe: async (
      _: unknown,
      { name, userId }: MutationCreateRecipeArgs,
      ctx: Context
    ) => {
      return ctx.prisma.recipe.create({ data: { name, userId } })
    },
    deleteRecipe: async (
      _: unknown,
      { id }: MutationDeleteRecipeArgs,
      ctx: Context
    ) => {
      return ctx.prisma.recipe.delete({ where: { id } })
    },
    updateRecipe: async (
      _: unknown,
      { id, name }: MutationUpdateRecipeArgs,
      ctx: Context
    ) => {
      return ctx.prisma.recipe.update({ where: { id }, data: { name } })
    },
  },
}
