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
  useAppDispatch,
  useRecipeIngredients,
  updateRecipe,
  addIngredient,
} from '@recipe-box/state'
import { em } from '@recipe-box/utils'

import { Ingredient } from './Ingredient'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 300 },
}

const iconLinkCss = css`
  position: absolute;
  right: ${em('7px')};
`

export const Ingredients = (): JSX.Element => {
  const recipeId = useRecipeId()
  const recipes = useRecipes()
  const recipeIngredients = useRecipeIngredients(recipeId)
  const dispatch = useAppDispatch()

  const addItem = (name: string): void => {
    dispatch(addIngredient(recipeId, name))
  }

  return (
    <Box>
      <BoxHeader>
        <Input
          size='big'
          isFullWidth
          value={recipes[recipeId].name}
          onChange={(e): void => {
            dispatch(updateRecipe(recipeId, e.target.value))
          }}
          isReadOnly
          canEdit
        />
        <Link
          to='/'
          role='link'
          aria-label='back'
          css={css([iconLinkCss, linkCss])}
        >
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
