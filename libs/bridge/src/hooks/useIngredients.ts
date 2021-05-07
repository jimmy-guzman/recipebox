import { Ingredient } from '@recipe-box/types'
import { useQuery, UseQueryResult } from 'react-query'
import { gql, request } from 'graphql-request'

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
  return useQuery<{ ingredients: Ingredient[] }>('ingredients', () => {
    return request('http://localhost:3100/graphql', query)
  })
}
