import { CSSTransition, TransitionGroup } from 'react-transition-group'
import {
  Typography,
  Box,
  BoxHeader,
  BoxContent,
  AddItemForm,
} from '@recipe-box/components'
import { useAppDispatch, useRecipes, addRecipe } from '@recipe-box/state'

import { Recipe } from './Recipe'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 500 },
}

export const Recipes = (): JSX.Element => {
  const recipes = useRecipes()
  const dispatch = useAppDispatch()

  return (
    <Box>
      <BoxHeader>
        <Typography variant='h2'>Recipes</Typography>
      </BoxHeader>
      <BoxContent>
        <TransitionGroup component={null}>
          {Object.values(recipes).map((recipe) => (
            <CSSTransition {...transitionOptions} key={recipe.id}>
              <Recipe {...recipe} />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <AddItemForm
          addItem={(name: string): void => {
            dispatch(addRecipe(name))
          }}
          itemName='recipe'
        />
      </BoxContent>
    </Box>
  )
}
