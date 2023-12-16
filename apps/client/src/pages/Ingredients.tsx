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
  Spinner,
} from '@recipe-box/components'
import { useState } from 'react'

import { useRecipeId } from '../hooks'
import { trpc } from '../trpc'
import { Ingredient } from '../components/Ingredient'
import { AddIngredientForm } from '../components/AddIngredientForm'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 300 },
}

const Ingredients = (): JSX.Element => {
  const recipeId = useRecipeId()
  const { isLoading, data } = trpc.recipe.byId.useQuery({ id: recipeId })

  const { mutate: updateRecipe } = trpc.recipe.update.useMutation()
  const [recipeName, setRecipeName] = useState(() => data?.name)

  if (isLoading) return <Spinner size='large' />

  return (
    <Box>
      <BoxHeader>
        <Input
          size='big'
          isFullWidth
          value={recipeName ?? data?.name}
          onChange={(e): void => {
            setRecipeName(e.target.value)
          }}
          onBlur={(): void => {
            if (recipeName) {
              updateRecipe({ id: recipeId, name: recipeName })
            }
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
          {data?.ingredients.map((ingredient) => (
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

export default Ingredients
