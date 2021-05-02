/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PrismaClient } from '@prisma/client'

import {
  MutationCreateIngredientArgs,
  MutationUpdateIngredientArgs,
  MutationDeleteIngredientArgs,
  QueryIngredientArgs,
} from '../generated/graphql'

const prisma = new PrismaClient()

export const ingredients = {
  Query: {
    ingredient: async (_: unknown, { id }: QueryIngredientArgs) => {
      const ingredient = await prisma.ingredient.findUnique({
        where: { id: parseInt(id, 10) },
      })

      if (ingredient) return ingredient

      throw new Error(`Ingredient w/ id of ${id} was not found!`)
    },
    ingredients: async () => prisma.ingredient.findMany(),
  },
  Mutation: {
    async createIngredient(
      _: unknown,
      { name, recipeId }: MutationCreateIngredientArgs
    ) {
      return prisma.ingredient.create({
        data: { name, recipeId: parseInt(recipeId, 10) },
      })
    },
    async deleteIngredient(_: unknown, { id }: MutationDeleteIngredientArgs) {
      return prisma.ingredient.delete({ where: { id: parseInt(id, 10) } })
    },
    async updateIngredient(
      _: unknown,
      { id, name }: MutationUpdateIngredientArgs
    ) {
      return prisma.ingredient.update({
        where: { id: parseInt(id, 10) },
        data: { name },
      })
    },
  },
}
