import {
  Box,
  BoxContent,
  BoxHeader,
  BoxItem,
  Button,
  Input,
  Spinner,
  Typography,
  linkCss,
} from '@recipe-box/components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import { trpc } from '../../trpc'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 500 },
}

const AddItemForm = (): JSX.Element => {
  const [name, setName] = useState('')
  const utils = trpc.useUtils()
  const { mutate } = trpc.addRecipe.useMutation({
    onSettled: async () => {
      await utils.recipes.invalidate()
    },
  })

  return (
    <BoxItem>
      <form
        onSubmit={(e): void => {
          e.preventDefault()
          mutate({ name, userId: 'ckodlpl9y28553rslvrsc5ujc' })
          setName('')
        }}
      >
        <Input
          isFullWidth
          value={name}
          placeholder={`new recipe`}
          onChange={(e): void => {
            setName(e.target.value)
          }}
        />
      </form>
    </BoxItem>
  )
}

const Home = (): JSX.Element => {
  const utils = trpc.useUtils()
  const { data, isLoading } = trpc.recipes.useQuery()
  const { mutate: deleteRecipe } = trpc.deleteRecipeById.useMutation({
    onSettled: async () => {
      await utils.recipes.invalidate()
    },
  })

  if (isLoading) return <Spinner size='large' />

  return (
    <Box>
      <BoxHeader>
        <Typography variant='h2'>Recipes</Typography>
      </BoxHeader>
      <BoxContent>
        <TransitionGroup component={null}>
          {data?.map((recipe) => (
            <CSSTransition {...transitionOptions} key={recipe.id}>
              <BoxItem>
                <Link to={`/recipe/${recipe.id}`} css={linkCss}>
                  {recipe.name}
                </Link>
                <Button
                  variant='secondary'
                  ariaLabel={`delete ${recipe.name}`}
                  onClick={(): void => {
                    deleteRecipe({ id: recipe.id })
                  }}
                >
                  X
                </Button>
              </BoxItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <AddItemForm />
      </BoxContent>
    </Box>
  )
}

export default Home
