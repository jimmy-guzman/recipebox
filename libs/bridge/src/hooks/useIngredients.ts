import { Ingredient } from '@recipe-box/types'
import { useQuery, UseQueryResult } from 'react-query'
import { gql } from 'graphql-request'

import { useGqlClient } from '../providers'

const query = gql`
  {
    ingredients {
      id
      name
    }
  }
`

export const useIngredients = (): UseQueryResult<{
  ingredients: Ingredient[]
}> => {
  const gqlClient = useGqlClient()

  return useQuery<{ ingredients: Ingredient[] }>('ingredients', () => {
    return gqlClient.request(query)
  })
}
