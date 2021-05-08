import { Recipe } from '@recipe-box/types'
import { useQuery, UseQueryResult } from 'react-query'
import { gql } from 'graphql-request'
import { useErrorHandler } from 'react-error-boundary'

import { useGqlClient } from '../providers'

const query = gql`
  {
    recipes {
      id
      name
    }
  }
`

export const useRecipes = (): UseQueryResult<{
  recipes: Recipe[]
}> => {
  const gqlClient = useGqlClient()
  const handleError = useErrorHandler()

  return useQuery<{ recipes: Recipe[] }>(
    'recipes',
    () => gqlClient.request(query),
    { onError: handleError }
  )
}
