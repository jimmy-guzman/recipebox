import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { fastify } from 'fastify';

import { createContext } from './context';
import { appRouter } from './routers/_app';

const server = fastify({
  maxParamLength: 5000,
  logger: true,
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
