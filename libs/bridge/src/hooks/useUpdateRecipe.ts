import { Recipe } from '@recipe-box/types'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { gql, request } from 'graphql-request'

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
  const queryClient = useQueryClient()

  return useMutation<Recipe, unknown, { name: string }>(
    ({ name }) => {
      return request('http://localhost:3100/graphql', mutation, { id, name })
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('recipe')
      },
    }
  )
}
