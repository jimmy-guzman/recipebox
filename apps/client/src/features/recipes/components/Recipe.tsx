import { Link } from 'react-router-dom'
import { linkCss, Button, BoxItem } from '@recipe-box/components'
import { useAppDispatch, RecipeModel, removeRecipe } from '@recipe-box/state'

type RecipeProps = RecipeModel

export const Recipe = ({ id, name }: RecipeProps): JSX.Element => {
  const dispatch = useAppDispatch()

  return (
    <BoxItem>
      <Link to={`/recipe/${id}`} css={linkCss}>
        {name}
      </Link>
      <Button
        variant='secondary'
        ariaLabel={`delete ${name}`}
        onClick={(): void => {
          dispatch(removeRecipe(id))
        }}
      >
        X
      </Button>
    </BoxItem>
  )
}
