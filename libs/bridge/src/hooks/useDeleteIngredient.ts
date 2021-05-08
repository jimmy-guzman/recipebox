import { Ingredient } from '@recipe-box/types'
import { useMutation, UseMutationResult, useQueryClient } from 'react-query'
import { gql } from 'graphql-request'

import { useGqlClient } from '../providers'

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
  const gqlClient = useGqlClient()
  const queryClient = useQueryClient()

  return useMutation<Ingredient, unknown, string>(
    (id: string) => gqlClient.request(mutation, { id }),
    {
      onSettled: () => {
        queryClient.invalidateQueries('recipe')
      },
    }
  )
}
