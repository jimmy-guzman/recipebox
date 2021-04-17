import { Link } from 'react-router-dom'

import { useAppDispatch } from '../../../common/hooks'
import { RecipeModel } from '../../../common/models'
import { removeRecipe } from '../actions'

type RecipeProps = RecipeModel

export const Recipe = ({ id, name }: RecipeProps): JSX.Element => {
  const dispatch = useAppDispatch()

  return (
    <li className='box__item'>
      <Link to={`/recipe/${id}`}>{name} </Link>
      <button
        type='button'
        aria-label={`delete ${name}`}
        className='btn__secondary'
        onClick={(): void => {
          dispatch(removeRecipe(id))
        }}
      >
        X
      </button>
    </li>
  )
}
