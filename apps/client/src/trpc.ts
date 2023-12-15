import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from '@recipe-box/server'

export const trpc = createTRPCReact<AppRouter>()
