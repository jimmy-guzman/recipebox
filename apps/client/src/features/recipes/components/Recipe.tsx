import { Link } from 'react-router-dom'

import { linkCss, Button, BoxItem } from '../../../common/components'
import { useAppDispatch } from '../../../common/hooks'
import { RecipeModel } from '../../../common/models'
import { removeRecipe } from '../actions'

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
