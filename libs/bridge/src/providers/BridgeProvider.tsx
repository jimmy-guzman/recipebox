import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { GqlClientProvider } from './GqlClientProvider'

const queryClient = new QueryClient()

export const BridgeProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <GqlClientProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </GqlClientProvider>
  )
}
