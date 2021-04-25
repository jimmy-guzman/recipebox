import { GraphQLError } from 'graphql'

export const errorHandler = (error: GraphQLError): Error => {
  // eslint-disable-next-line no-console
  console.log('Error while running resolver', { error })

  return new Error('Internal server error')
}
