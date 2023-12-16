import { router } from '../trpc';
import { ingredientRouter } from './ingredient';
import { recipeRouter } from './recipe';

export const appRouter = router({
  ingredient: ingredientRouter,
  recipe: recipeRouter,
});

export type AppRouter = typeof appRouter;
