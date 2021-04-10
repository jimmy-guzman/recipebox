import { useParams } from 'react-router-dom'

export const useRecipeId = (): string => {
  const { recipe: recipeId } = useParams<{ recipe: string }>()

  return recipeId
}
