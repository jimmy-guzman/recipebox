import { Recipe } from '@recipe-box/types'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { gql, request } from 'graphql-request'

const mutation = gql`
  mutation createRecipe($name: String!, $userId: String!) {
    createRecipe(name: $name, userId: $userId) {
      name
      createdAt
      id
      updatedAt
    }
  }
`

export const useAddRecipe = (): UseMutationResult<Recipe, unknown, string> => {
  const queryClient = useQueryClient()

  return useMutation<Recipe, unknown, string>(
    (name: string) => {
      return request('http://localhost:3100/graphql', mutation, {
        name,
        userId: 'ckodlpl9y28553rslvrsc5ujc', // TODO: userId
      })
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries('recipes')
      },
    }
  )
}
