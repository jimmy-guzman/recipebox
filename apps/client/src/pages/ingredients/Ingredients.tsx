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
  BoxItem,
} from '@recipe-box/components'
import { useState } from 'react'

import { useRecipeId } from '../../hooks'
import { Ingredient } from './Ingredient'
import { trpc } from '../../trpc'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 300 },
}

const AddItemForm = (): JSX.Element => {
  const recipeId = useRecipeId()
  const [name, setName] = useState('')
  const utils = trpc.useUtils()
  const { mutate: addItem } = trpc.addIngredient.useMutation({
    onSettled: async () => {
      await utils.recipeById.invalidate({ id: recipeId })
    },
  })

  return (
    <BoxItem>
      <form
        onSubmit={(e): void => {
          e.preventDefault()
          addItem({ name, recipeId })
          setName('')
        }}
      >
        <Input
          isFullWidth
          value={name}
          placeholder={`new ingredient`}
          onChange={(e): void => {
            setName(e.target.value)
          }}
        />
      </form>
    </BoxItem>
  )
}

const Ingredients = (): JSX.Element => {
  const recipeId = useRecipeId()
  const { isLoading, data } = trpc.recipeById.useQuery({ id: recipeId })

  const { mutate: updateRecipe } = trpc.updateRecipeById.useMutation()
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
        <AddItemForm />
      </BoxContent>
    </Box>
  )
}

export default Ingredients
