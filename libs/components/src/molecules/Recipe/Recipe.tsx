import { Link } from 'react-router-dom'
import { useRemoveRecipe } from '@recipe-box/state'

import { linkCss, Button } from '../../atoms'
import { BoxItem } from '../BoxItem'

interface RecipeProps {
  id: string
  name: string
}

export const Recipe = ({ id, name }: RecipeProps): JSX.Element => {
  const removeRecipe = useRemoveRecipe(id)

  return (
    <BoxItem>
      <Link to={`/recipe/${id}`} css={linkCss}>
        {name}
      </Link>
      <Button
        variant='secondary'
        ariaLabel={`delete ${name}`}
        onClick={removeRecipe}
      >
        X
      </Button>
    </BoxItem>
  )
}
