import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { RecipeModel } from '@recipe-box/state'

import { Typography } from '../../atoms'
import {
  AddItemForm,
  Box,
  BoxContent,
  BoxHeader,
  Recipe,
} from '../../molecules'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 500 },
}

interface RecipesProps {
  addRecipe: (name: string) => void
  recipes: Record<string, RecipeModel>
}

export const Recipes = ({ addRecipe, recipes }: RecipesProps): JSX.Element => {
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
        <AddItemForm addItem={addRecipe} itemName='recipe' />
      </BoxContent>
    </Box>
  )
}
