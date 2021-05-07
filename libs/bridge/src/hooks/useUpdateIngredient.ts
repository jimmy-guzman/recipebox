import { Ingredient } from '@recipe-box/types'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { gql, request } from 'graphql-request'

const mutation = gql`
  mutation updateIngredient($id: String!, $name: String!) {
    updateIngredient(id: $id, name: $name) {
      name
      createdAt
      id
      updatedAt
    }
  }
`

export const useUpdateIngredient = (
  id: string
): UseMutationResult<Ingredient, unknown, { name: string }> => {
  const queryClient = useQueryClient()

  return useMutation<Ingredient, unknown, { name: string }>(
    ({ name }) => {
      return request('http://localhost:3100/graphql', mutation, { id, name })
    },
    {
      onSettled: () => {
        // TODO: perform optimistic updates instead
        queryClient.invalidateQueries('recipe')
      },
    }
  )
}
