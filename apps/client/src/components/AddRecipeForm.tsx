import { BoxItem, Input } from '@recipe-box/components';
import { useState } from 'react';

import { trpc } from '../trpc';

export const AddRecipeForm = (): JSX.Element => {
  const [name, setName] = useState('');
  const utils = trpc.useUtils();
  const { mutate } = trpc.recipe.create.useMutation({
    onSettled: async () => {
      await utils.recipe.list.invalidate();
    },
  });

  return (
    <BoxItem>
      <form
        onSubmit={(e): void => {
          e.preventDefault();
          mutate({ name, userId: import.meta.env.VITE_USER_ID });
          setName('');
        }}
      >
        <Input
          isFullWidth
          value={name}
          placeholder={`new recipe`}
          onChange={(e): void => {
            setName(e.target.value);
          }}
        />
      </form>
    </BoxItem>
  );
};
