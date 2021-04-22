import { Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { css } from '@emotion/react'
import {
  Input,
  BackIcon,
  Box,
  BoxContent,
  BoxHeader,
  linkCss,
  AddItemForm,
} from '@recipe-box/components'
import {
  useRecipeId,
  useRecipes,
  useRecipeIngredients,
  useUpdateRecipe,
  useAddIngredient,
} from '@recipe-box/state'

import { Ingredient } from './Ingredient'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 300 },
}

const Ingredients = (): JSX.Element => {
  const recipeId = useRecipeId()
  const recipes = useRecipes()
  const recipeIngredients = useRecipeIngredients(recipeId)
  const addItem = useAddIngredient(recipeId)
  const updateRecipe = useUpdateRecipe(recipeId)

  return (
    <Box>
      <BoxHeader>
        <Input
          size='big'
          isFullWidth
          value={recipes[recipeId].name}
          onChange={(e): void => {
            updateRecipe(e.target.value)
          }}
          isReadOnly
          canEdit
        />
        <Link to='/' role='link' aria-label='back' css={css(linkCss)}>
          <BackIcon height={24} width={24} />
        </Link>
      </BoxHeader>
      <BoxContent>
        <TransitionGroup component={null}>
          {recipeIngredients.map((ingredient) => (
            <CSSTransition {...transitionOptions} key={ingredient.id}>
              <Ingredient {...ingredient} />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <AddItemForm itemName='ingredient' addItem={addItem} />
      </BoxContent>
    </Box>
  )
}

export default Ingredients
