import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Recipe, AddRecipeForm } from './components'
import { useRecipes } from '../../common/hooks'
import { Typography } from '../../common/components'

const transitionOptions = {
  classNames: 'slide-left',
  timeout: { enter: 500, exit: 500 },
}

export const Recipes = (): JSX.Element => {
  const recipes = useRecipes()

  return (
    <div className='box__container  grid__col--6'>
      <header className='box__header'>
        <Typography variant='h2'>Recipes</Typography>
      </header>
      <ul className='box__list'>
        <TransitionGroup component={null}>
          {Object.values(recipes).map((recipe) => {
            return (
              <CSSTransition {...transitionOptions} key={recipe.id}>
                <Recipe {...recipe} key={recipe.id} />
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <AddRecipeForm />
      </ul>
    </div>
  )
}
