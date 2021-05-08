import { Recipe } from '@recipe-box/types'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { gql } from 'graphql-request'

import { useGqlClient } from '../providers'

const mutation = gql`
  mutation updateRecipe($id: String!, $name: String!) {
    updateRecipe(id: $id, name: $name) {
      name
      createdAt
      id
      updatedAt
    }
  }
`

export const useUpdateRecipe = (
  id: string
): UseMutationResult<Recipe, unknown, { name: string }> => {
  const gqlClient = useGqlClient()
  const queryClient = useQueryClient()

  return useMutation<Recipe, unknown, { name: string }>(
    ({ name }) => gqlClient.request(mutation, { id, name }),
    {
      onSettled: () => {
        queryClient.invalidateQueries('recipe')
      },
    }
  )
}
