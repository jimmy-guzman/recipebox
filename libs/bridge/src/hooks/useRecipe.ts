import { Recipe } from '@recipe-box/types'
import { useQuery, UseQueryResult } from 'react-query'
import { gql, request } from 'graphql-request'

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
  return useQuery('recipe', () => {
    return request('http://localhost:3100/graphql', query, { id })
  })
}
