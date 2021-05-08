import { Recipe } from '@recipe-box/types'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { gql } from 'graphql-request'

import { useGqlClient } from '../providers'

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
  const gqlClient = useGqlClient()
  const queryClient = useQueryClient()

  return useMutation<Recipe, unknown, string>(
    (id: string) => gqlClient.request(mutation, { id }),
    {
      onSettled: () => {
        queryClient.invalidateQueries('recipes')
      },
    }
  )
}
