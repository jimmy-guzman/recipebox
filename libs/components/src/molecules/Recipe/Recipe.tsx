import { Link } from 'react-router-dom'
import { useDeleteRecipe } from '@recipe-box/bridge'

import { linkCss, Button } from '../../atoms'
import { BoxItem } from '../BoxItem'

interface RecipeProps {
  id: string
  name: string
}

export const Recipe = ({ id, name }: RecipeProps): JSX.Element => {
  const recipe = useDeleteRecipe()

  return (
    <BoxItem>
      <Link to={`/recipe/${id}`} css={linkCss}>
        {name}
      </Link>
      <Button
        variant='secondary'
        ariaLabel={`delete ${name}`}
        onClick={(): void => {
          recipe.mutate(id)
        }}
      >
        X
      </Button>
    </BoxItem>
  )
}
