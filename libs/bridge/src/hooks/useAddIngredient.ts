import { Ingredient } from '@recipe-box/types'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { gql } from 'graphql-request'

import { useGqlClient } from '../providers'

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
  const gqlClient = useGqlClient()
  const queryClient = useQueryClient()

  return useMutation<Ingredient, unknown, string>(
    (name: string) => {
      return gqlClient.request(mutation, {
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
