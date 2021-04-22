import { useDispatch } from 'react-redux'

import {
  addIngredient,
  removeIngredient,
  updateIngredient,
} from '../ingredients'
import { addRecipe, removeRecipe, updateRecipe } from '../recipes'
import { AppDispatch } from '../store'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAddRecipe = (): ((name: string) => void) => {
  const dispatch = useAppDispatch()

  return (name: string): void => {
    dispatch(addRecipe(name))
  }
}

export const useAddIngredient = (
  recipeId: string
): ((name: string) => void) => {
  const dispatch = useAppDispatch()

  return (name: string): void => {
    dispatch(addIngredient(recipeId, name))
  }
}

export const useUpdateRecipe = (recipeId: string): ((name: string) => void) => {
  const dispatch = useAppDispatch()

  return (name: string): void => {
    dispatch(updateRecipe(recipeId, name))
  }
}

export const useUpdateIngredient = (id: string): ((name: string) => void) => {
  const dispatch = useAppDispatch()

  return (name: string): void => {
    dispatch(updateIngredient(id, name))
  }
}

export const useRemoveRecipe = (id: string): (() => void) => {
  const dispatch = useAppDispatch()

  return (): void => {
    dispatch(removeRecipe(id))
  }
}

export const useRemoveIngredient = (id: string): (() => void) => {
  const dispatch = useAppDispatch()

  return (): void => {
    dispatch(removeIngredient(id))
  }
}
