import { useState } from 'react';

import { List } from '../../atoms/List';
import { close, list, wrapper } from './Instructions.styles';

export const Instructions = (): JSX.Element | null => {
  const [isOpened, setIsOpened] = useState(true);

  const handleClick = (): void => {
    setIsOpened(false);
  };

  if (isOpened) {
    return (
      <div css={wrapper}>
        <List css={list}>
          <li>{`Click on a recipe name to view that recipe's ingredients.`}</li>
          <li>
            Use the new recipe or ingredient bar to create a new recipe or
            ingredient.
          </li>
          <li>
            When viewing the recipe, you can double click on a ingredient or
            recipe name to edit that recipe or ingredient.
          </li>
        </List>
        <span
          role='button'
          aria-label='close instructions'
          tabIndex={0}
          className='close'
          onKeyDown={handleClick}
          onClick={handleClick}
          css={close}
        >
          X
        </span>
      </div>
    );
  }

  return null;
};
