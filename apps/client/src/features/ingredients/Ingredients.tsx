import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { css } from '@emotion/react'

import { Ingredient, AddIngredientForm } from './components'
import {
  useRecipeId,
  useRecipes,
  useAppDispatch,
  useRecipeIngredients,
} from '../../common/hooks'
import {
  BackIcon,
  Box,
  BoxContent,
  BoxHeader,
  Input,
  linkCss,
} from '../../common/components'
import { updateRecipe } from '../recipes/actions'
import { em } from '../../common/utils'

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
  const [isReadyOnly, setIsReadyOnly] = useState(true)

  return (
    <Box className='grid__col--6'>
      <BoxHeader>
        <Input
          size='big'
          isFullWidth
          value={recipes[recipeId].name}
          onChange={(e): void => {
            dispatch(updateRecipe(recipeId, e.target.value))
          }}
          isReadOnly={isReadyOnly}
          onDoubleClick={(): void => {
            setIsReadyOnly(false)
          }}
          onBlur={(): void => {
            setIsReadyOnly(true)
          }}
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
        <AddIngredientForm />
      </BoxContent>
    </Box>
  )
}
