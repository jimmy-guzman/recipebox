import { Ingredient } from '@recipe-box/types'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { gql, request } from 'graphql-request'

const mutation = gql`
  mutation deleteIngredient($id: String!) {
    deleteIngredient(id: $id) {
      id
      name
    }
  }
`

export const useDeleteIngredient = (): UseMutationResult<
  Ingredient,
  unknown,
  string
> => {
  const queryClient = useQueryClient()

  return useMutation<Ingredient, unknown, string>(
    (id: string) => {
      return request('http://localhost:3100/graphql', mutation, {
        id,
      })
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('recipe')
      },
    }
  )
}
