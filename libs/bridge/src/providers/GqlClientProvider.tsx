import { createContext, useContext, useState } from 'react'
import { GraphQLClient } from 'graphql-request'

export const GqlClientContext = createContext<GraphQLClient | undefined>(
  undefined
)
GqlClientContext.displayName = 'GqlClientContext'

export const useGqlClient = (): GraphQLClient => {
  const context = useContext(GqlClientContext)

  if (!context) {
    throw new Error('useGqlClient must be inside GqlClientProvider')
  }

  return context
}

export const GqlClientProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [gqlClient] = useState(
    () => new GraphQLClient('http://localhost:3100/graphql')
  )

  return (
    <GqlClientContext.Provider value={gqlClient}>
      {children}
    </GqlClientContext.Provider>
  )
}
