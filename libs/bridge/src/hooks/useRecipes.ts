import { Recipe } from '@recipe-box/types'
import { useQuery, UseQueryResult } from 'react-query'
import { gql, request } from 'graphql-request'

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
  return useQuery<{ recipes: Recipe[] }>('recipes', () => {
    return request('http://localhost:3100/graphql', query)
  })
}
