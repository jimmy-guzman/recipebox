/* eslint-disable sort-keys */
import { z } from 'zod'

import { router, publicProcedure } from '../trpc'
import { prisma } from '../prisma'

export const ingredientRouter = router({
  list: publicProcedure.query(async () => {
    return prisma.ingredient.findMany({ orderBy: { createdAt: 'asc' } })
  }),
  update: publicProcedure
    .input(z.object({ id: z.string(), name: z.string() }))
    .mutation(async (opts) => {
      return prisma.ingredient.update({
        where: { id: opts.input.id },
        data: { name: opts.input.name },
      })
    }),
  create: publicProcedure
    .input(z.object({ name: z.string(), recipeId: z.string() }))
    .mutation(async (opts) => {
      return prisma.ingredient.create({ data: opts.input })
    }),
  remove: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async (opts) => {
      return prisma.ingredient.delete({ where: { id: opts.input.id } })
    }),
})
