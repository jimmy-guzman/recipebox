import { GraphQLDateTime } from 'graphql-iso-date'

import { recipes } from './recipes'
import { ingredients } from './ingredients'

export const resolvers = {
  Date: GraphQLDateTime,
  Query: {
    ...recipes.Query,
    ...ingredients.Query,
  },
  Mutation: {
    ...recipes.Mutation,
    ...ingredients.Mutation,
  },
}
