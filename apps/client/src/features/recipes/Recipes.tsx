import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Typography, Box, BoxHeader, BoxContent } from '@recipe-box/components'
import { useRecipes } from '@recipe-box/state'

import { Recipe, AddRecipeForm } from './components'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 500 },
}

export const Recipes = (): JSX.Element => {
  const recipes = useRecipes()

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
        <AddRecipeForm />
      </BoxContent>
    </Box>
  )
}
