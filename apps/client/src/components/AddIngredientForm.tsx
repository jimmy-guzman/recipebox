import { BoxItem, Input } from '@recipe-box/components';
import { useState } from 'react';

import { useRecipeId } from '../hooks';
import { trpc } from '../trpc';

export const AddIngredientForm = (): JSX.Element => {
  const recipeId = useRecipeId();
  const [name, setName] = useState('');
  const utils = trpc.useUtils();
  const { mutate: addItem } = trpc.ingredient.create.useMutation({
    onSettled: async () => {
      await utils.recipe.byId.invalidate({ id: recipeId });
    },
  });

  return (
    <BoxItem>
      <form
        onSubmit={(e): void => {
          e.preventDefault();
          addItem({ name, recipeId });
          setName('');
        }}
      >
        <Input
          isFullWidth
          value={name}
          placeholder={`new ingredient`}
          onChange={(e): void => {
            setName(e.target.value);
          }}
        />
      </form>
    </BoxItem>
  );
};
