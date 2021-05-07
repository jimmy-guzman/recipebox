/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PrismaClient } from '@prisma/client'
import {
  MutationCreateIngredientArgs,
  MutationUpdateIngredientArgs,
  MutationDeleteIngredientArgs,
  QueryIngredientArgs,
} from '@recipe-box/types'

interface Context {
  prisma: PrismaClient
}

export const ingredients = {
  Query: {
    ingredient: async (
      _: unknown,
      { id }: QueryIngredientArgs,
      ctx: Context
    ) => {
      const ingredient = await ctx.prisma.ingredient.findUnique({
        where: { id },
      })

      if (ingredient) return ingredient

      throw new Error(`Ingredient w/ id of ${id} was not found!`)
    },
    ingredients: async (_parent: unknown, _args: unknown, ctx: Context) => {
      return ctx.prisma.ingredient.findMany({ orderBy: { createdAt: 'asc' } })
    },
  },
  Mutation: {
    async createIngredient(
      _: unknown,
      { name, recipeId }: MutationCreateIngredientArgs,
      ctx: Context
    ) {
      return ctx.prisma.ingredient.create({ data: { name, recipeId } })
    },
    async deleteIngredient(
      _: unknown,
      { id }: MutationDeleteIngredientArgs,
      ctx: Context
    ) {
      return ctx.prisma.ingredient.delete({ where: { id } })
    },
    async updateIngredient(
      _: unknown,
      { id, name }: MutationUpdateIngredientArgs,
      ctx: Context
    ) {
      return ctx.prisma.ingredient.update({ where: { id }, data: { name } })
    },
  },
}
