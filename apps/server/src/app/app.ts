import Koa from 'koa'
import KoaRouter from 'koa-router'
import { ApolloServer, gql } from 'apollo-server-koa'

import { queryResolvers, schema, errorHandler } from '../utils'

export const createApp = (): Koa => {
  const app = new Koa()
  const router = new KoaRouter()
  const server = new ApolloServer({
    typeDefs: gql(`
    type Query

    schema {
      query: Query
    }

    ${schema}
  `),
    context: ({ ctx }): unknown => ctx,
    formatError: errorHandler,
    resolvers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      Query: queryResolvers,
    },
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
