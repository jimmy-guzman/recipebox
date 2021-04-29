import { nanoid } from 'nanoid'

import {
  MutationCreateRecipeArgs,
  MutationUpdateRecipeArgs,
  MutationDeleteRecipeArgs,
  Recipe,
} from '../generated/graphql'
import mockDb from './mock-db.json'

const resolvers = {
  Query: {
    recipes: (): Recipe[] => mockDb.recipes,
  },
  Mutation: {
    createRecipe(
      _: unknown,
      { title, description }: MutationCreateRecipeArgs
    ): Recipe {
      const item = { id: nanoid(), title, description }

      mockDb.recipes.push(item)

      return item
    },
    updateRecipe(
      _: unknown,
      { id, title, description }: MutationUpdateRecipeArgs
    ): Recipe {
      const item = mockDb.recipes.find((i) => i.id === id)

      if (item && title && description) {
        item.title = title
        item.description = description
        return item
      }
      throw new Error('Id not found')
    },
    deleteRecipe(_: unknown, { id }: MutationDeleteRecipeArgs): string {
      const idx = mockDb.recipes.findIndex((i) => i.id === id)

      if (idx !== -1) {
        mockDb.recipes.splice(idx, 1)
        return `Item ${id} deleted with success`
      }
      throw new Error('Id not found')
    },
  },
}

export default resolvers
