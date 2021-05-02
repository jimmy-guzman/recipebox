import { ApolloError } from 'apollo-server-koa'
import { GraphQLError } from 'graphql'

export const formatError = (error: GraphQLError): Error => {
  // eslint-disable-next-line no-console
  console.log('Error while running resolver', { error })

  return new ApolloError(`Internal server error`)
}
