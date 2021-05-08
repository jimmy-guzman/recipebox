import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { GqlClientProvider } from './GqlClientProvider'

const queryClient = new QueryClient()

export const BridgeProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <QueryErrorResetBoundary>
      <GqlClientProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </QueryClientProvider>
      </GqlClientProvider>
    </QueryErrorResetBoundary>
  )
}
