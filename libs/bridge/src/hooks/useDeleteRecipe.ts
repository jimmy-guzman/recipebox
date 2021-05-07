import { Recipe } from '@recipe-box/types'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { gql, request } from 'graphql-request'

const mutation = gql`
  mutation deleteRecipe($id: String!) {
    deleteRecipe(id: $id) {
      id
      name
    }
  }
`

export const useDeleteRecipe = (): UseMutationResult<
  Recipe,
  unknown,
  string
> => {
  const queryClient = useQueryClient()

  return useMutation<Recipe, unknown, string>(
    (id: string) => {
      return request('http://localhost:3100/graphql', mutation, {
        id,
      })
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('recipes')
      },
    }
  )
}
