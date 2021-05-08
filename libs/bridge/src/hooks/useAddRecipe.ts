import { Recipe } from '@recipe-box/types'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { gql } from 'graphql-request'

import { useGqlClient } from '../providers'

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
  const gqlClient = useGqlClient()
  const queryClient = useQueryClient()

  return useMutation<Recipe, unknown, string>(
    (name: string) => {
      return gqlClient.request(mutation, {
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
