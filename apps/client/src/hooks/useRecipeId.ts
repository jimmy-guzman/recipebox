import { useParams } from 'react-router-dom'

const useRequiredParams = <T extends Record<string, unknown>>(): T => {
  return useParams() as T
}

export const useRecipeId = (): string => {
  const { id } = useRequiredParams<{ id: string }>()

  return id
}
