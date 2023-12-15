import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import fastify from 'fastify'
import cors from '@fastify/cors'

import { createContext } from './context'
import { appRouter } from './router'

const server = fastify({
  maxParamLength: 5000,
  logger: true,
})

server.register(cors)

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter, createContext },
})

const start = async (): Promise<void> => {
  try {
    await server.listen({ port: 3000 })
  } catch (err: unknown) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
