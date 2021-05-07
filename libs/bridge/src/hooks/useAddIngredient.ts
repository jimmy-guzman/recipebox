import { Ingredient } from '@recipe-box/types'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { gql, request } from 'graphql-request'

const mutation = gql`
  mutation createIngredient($name: String!, $recipeId: String!) {
    createIngredient(name: $name, recipeId: $recipeId) {
      name
      createdAt
      id
      updatedAt
    }
  }
`

export const useAddIngredient = (
  recipeId: string
): UseMutationResult<Ingredient, unknown, string> => {
  const queryClient = useQueryClient()

  return useMutation<Ingredient, unknown, string>(
    (name: string) => {
      return request('http://localhost:3100/graphql', mutation, {
        name,
        recipeId,
      })
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('recipe')
      },
    }
  )
}
