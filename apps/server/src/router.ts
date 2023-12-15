/* eslint-disable sort-keys */
import { PrismaClient } from '@prisma/client'
import { initTRPC } from '@trpc/server'
import { z } from 'zod'

const prisma = new PrismaClient()

export const t = initTRPC.create()

export const appRouter = t.router({
  recipes: t.procedure.query(async () => {
    return prisma.recipe.findMany({
      orderBy: { createdAt: 'asc' },
      include: { ingredients: { orderBy: { createdAt: 'asc' } } },
    })
  }),
  recipeById: t.procedure
    .input(z.object({ id: z.string() }))
    .query(async (opts) => {
      const recipe = await prisma.recipe.findUnique({
        where: { id: opts.input.id },
        include: { ingredients: true },
      })

      if (recipe) return recipe

      throw new Error(`Recipe with an id of ${opts.input.id} was not found`)
    }),
  deleteRecipeById: t.procedure
    .input(z.object({ id: z.string() }))
    .mutation(async (opts) => {
      return prisma.recipe.delete({ where: { id: opts.input.id } })
    }),
  updateRecipeById: t.procedure
    .input(z.object({ id: z.string(), name: z.string() }))
    .mutation(async (opts) => {
      return prisma.recipe.update({
        where: { id: opts.input.id },
        data: { name: opts.input.name },
      })
    }),
  addRecipe: t.procedure
    .input(z.object({ name: z.string(), userId: z.string() }))
    .mutation(async (opts) => {
      return prisma.recipe.create({ data: opts.input })
    }),
  ingredients: t.procedure.query(async () => {
    return prisma.ingredient.findMany({ orderBy: { createdAt: 'asc' } })
  }),
  updateIngredientById: t.procedure
    .input(z.object({ id: z.string(), name: z.string() }))
    .mutation(async (opts) => {
      return prisma.ingredient.update({
        where: { id: opts.input.id },
        data: { name: opts.input.name },
      })
    }),
  addIngredient: t.procedure
    .input(z.object({ name: z.string(), recipeId: z.string() }))
    .mutation(async (opts) => {
      return prisma.ingredient.create({ data: opts.input })
    }),
  deleteIngredientById: t.procedure
    .input(z.object({ id: z.string() }))
    .mutation(async (opts) => {
      return prisma.ingredient.delete({ where: { id: opts.input.id } })
    }),
})

export type AppRouter = typeof appRouter
