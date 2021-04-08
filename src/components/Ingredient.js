import React from 'react'
import { func, shape, string, number } from 'prop-types'

const Ingredient = (props) => (
  <li className='box__item'>
    <input
      value={props.name}
      onChange={(e) =>
        props.updateIngredient(
          props.match.params.recipe,
          props.index,
          e.target.value
        )
      }
      readOnly='true'
      onDoubleClick={(e) => (e.target.readOnly = '')}
      onBlur={(e) => (e.currentTarget.readOnly = 'true')}
    />
    <button
      type='button'
      className='btn__secondary'
      onClick={() =>
        props.removeIngredient(props.match.params.recipe, props.index)
      }
    >
      X
    </button>
  </li>
)

Ingredient.propTypes = {
  index: number.isRequired,
  match: shape({ params: shape({ recipe: string }) }),
  name: string,
  removeIngredient: func.isRequired,
  updateIngredient: func.isRequired,
}

export default Ingredient
