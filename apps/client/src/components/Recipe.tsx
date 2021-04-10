import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { RecipeModel } from '../models'
import { removeRecipe } from '../state/actions/actionCreators'

interface RecipeProps {
  details: RecipeModel
  index: number
}

const Recipe = ({ details, index }: RecipeProps): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <li className='box__item'>
      <Link to={`/recipe/${details.id}`}>{details.name} </Link>
      <button
        type='button'
        aria-label={`delete ${details.name}`}
        className='btn__secondary'
        onClick={(): void => {
          dispatch(removeRecipe(index))
        }}
      >
        X
      </button>
    </li>
  )
}

export default Recipe
