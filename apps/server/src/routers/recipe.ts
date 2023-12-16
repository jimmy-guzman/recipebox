/* eslint-disable sort-keys */
import { z } from 'zod'

import { router, publicProcedure } from '../trpc'
import { prisma } from '../prisma'

export const recipeRouter = router({
  list: publicProcedure.query(async () => {
    return prisma.recipe.findMany({
      orderBy: { createdAt: 'asc' },
      include: { ingredients: { orderBy: { createdAt: 'asc' } } },
    })
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async (opts) => {
      const recipe = await prisma.recipe.findUnique({
        where: { id: opts.input.id },
        include: { ingredients: true },
      })

      if (recipe) return recipe

      throw new Error(`Recipe with an id of ${opts.input.id} was not found`)
    }),
  remove: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async (opts) => {
      return prisma.recipe.delete({ where: { id: opts.input.id } })
    }),
  update: publicProcedure
    .input(z.object({ id: z.string(), name: z.string() }))
    .mutation(async (opts) => {
      return prisma.recipe.update({
        where: { id: opts.input.id },
        data: { name: opts.input.name },
      })
    }),
  create: publicProcedure
    .input(z.object({ name: z.string(), userId: z.string() }))
    .mutation(async (opts) => {
      return prisma.recipe.create({ data: opts.input })
    }),
})
