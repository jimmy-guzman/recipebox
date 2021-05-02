import Koa from 'koa'
import KoaRouter from 'koa-router'
import { ApolloServer, gql } from 'apollo-server-koa'

import { schema, formatError } from '../utils'
import { resolvers } from '../resolvers'

export const createApp = (): Koa => {
  const app = new Koa()
  const router = new KoaRouter()
  const server = new ApolloServer({
    typeDefs: gql(`
    type Query
    type Mutation

    schema {
      query: Query
      mutation: Mutation
    }

    ${schema}
  `),
    context: ({ ctx }): unknown => ctx,
    formatError,
    resolvers,
  })

  router.get('/healthz', (ctx) => {
    ctx.body = 'ok'
    ctx.header['content-type'] = 'json'
  })

  router.post('/graphql', server.getMiddleware())
  router.get('/graphql', server.getMiddleware())

  app.use(router.routes())
  app.use(router.allowedMethods())

  return app
}
