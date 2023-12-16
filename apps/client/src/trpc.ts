import { type AppRouter } from '@recipe-box/server';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();
