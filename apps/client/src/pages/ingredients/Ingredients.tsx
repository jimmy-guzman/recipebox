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
import { useRecipeId } from '@recipe-box/state'
import {
  useAddIngredient,
  useRecipe,
  useUpdateRecipe,
} from '@recipe-box/bridge'
import { useState } from 'react'

import { Ingredient } from './Ingredient'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 300 },
}

const Ingredients = (): JSX.Element => {
  const recipeId = useRecipeId()
  const { isLoading, data } = useRecipe(recipeId)
  const { mutate: addItem } = useAddIngredient(recipeId)
  const { mutate: updateRecipe } = useUpdateRecipe(recipeId)
  const [recipeName, setRecipeName] = useState(() => data?.recipe.name)

  if (isLoading) return <>Loading ...</>

  return (
    <Box>
      <BoxHeader>
        <Input
          size='big'
          isFullWidth
          value={recipeName ?? data?.recipe.name}
          onChange={(e): void => {
            setRecipeName(e.target.value)
          }}
          onBlur={(): void => {
            if (recipeName) {
              updateRecipe({ name: recipeName })
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
          {data?.recipe.ingredients?.map((ingredient) => (
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
