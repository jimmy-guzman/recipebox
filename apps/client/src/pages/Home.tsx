import {
  Box,
  BoxContent,
  BoxHeader,
  BoxItem,
  Button,
  Spinner,
  Typography,
  linkCss,
} from '@recipe-box/components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'

import { trpc } from '../trpc'
import { AddRecipeForm } from '../components/AddRecipeForm'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 500 },
}

const Home = (): JSX.Element => {
  const utils = trpc.useUtils()
  const { data, isLoading } = trpc.recipe.list.useQuery()
  const { mutate: deleteRecipe } = trpc.recipe.remove.useMutation({
    onSettled: async () => {
      await utils.recipe.list.invalidate()
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
        <AddRecipeForm />
      </BoxContent>
    </Box>
  )
}

export default Home
