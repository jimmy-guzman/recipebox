import { ApolloError } from 'apollo-server-koa'
import { GraphQLError } from 'graphql'

export const formatError = (error: GraphQLError): Error => {
  return new Error(error.message)
}
