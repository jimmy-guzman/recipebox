import { router } from '../trpc'
import { recipeRouter } from './recipe'
import { ingredientRouter } from './ingredient'

export const appRouter = router({
  ingredient: ingredientRouter,
  recipe: recipeRouter,
})

export type AppRouter = typeof appRouter
