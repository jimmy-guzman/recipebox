import { Recipe } from '@recipe-box/types'
import { useQuery, UseQueryResult } from 'react-query'
import { gql } from 'graphql-request'

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

  return useQuery<{ recipes: Recipe[] }>('recipes', () => {
    return gqlClient.request(query)
  })
}
