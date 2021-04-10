import React, { useState } from 'react'

const Instructions = (): JSX.Element | null => {
  const [isOpened, setIsOpened] = useState(true)

  const handleClick = (): void => {
    setIsOpened(false)
  }

  if (isOpened) {
    return (
      <div className='instructions'>
        <ul>
          <li>{`Click on a recipe name to view that recipe's ingredients.`}</li>
          <li>
            Use the new recipe or ingredient bar to create a new recipe or
            ingredient.
          </li>
          <li>
            When viewing the recipe, you can double click on a ingredient or
            recipe name to edit that recipe or ingredient.
          </li>
        </ul>
        <span
          role='button'
          aria-label='close instructions'
          tabIndex={0}
          className='close'
          onKeyDown={handleClick}
          onClick={handleClick}
        >
          X
        </span>
      </div>
    )
  }

  return null
}

export default Instructions
