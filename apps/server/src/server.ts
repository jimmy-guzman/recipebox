import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { type FastifyServerOptions } from 'fastify';
import { fastify } from 'fastify';

import { createContext } from './context';
import { appRouter } from './routers/_app';

const loggerByEnv: Record<string, FastifyServerOptions['logger']> = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        ignore: 'pid,hostname',
        singleLine: true,
      },
    },
  },
  production: true,
  test: false,
};

const server = fastify({
  maxParamLength: 5000,
  logger: process.env.NODE_ENV ? loggerByEnv[process.env.NODE_ENV] : true,
});

void server.register(cors);

void server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter, createContext },
});

const start = async (): Promise<void> => {
  try {
    await server.listen({ port: 3000 });
  } catch (err: unknown) {
    server.log.error(err);
    process.exit(1);
  }
};

void start();
