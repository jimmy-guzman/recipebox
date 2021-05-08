import { Recipe } from '@recipe-box/types'
import { useQuery, UseQueryResult } from 'react-query'
import { gql } from 'graphql-request'

import { useGqlClient } from '../providers'

const query = gql`
  query($id: String!) {
    recipe(id: $id) {
      id
      name
      ingredients {
        id
        name
      }
    }
  }
`

export const useRecipe = (
  id: string
): UseQueryResult<{
  recipe: Recipe
}> => {
  const gqlClient = useGqlClient()

  return useQuery('recipe', () => gqlClient.request(query, { id }))
}
