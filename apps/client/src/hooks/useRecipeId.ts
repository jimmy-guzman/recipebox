import { useParams } from 'react-router-dom'

export const useRecipeId = (): string => {
  const { id: recipeId } = useParams<{ id: string }>()

  return recipeId
}
