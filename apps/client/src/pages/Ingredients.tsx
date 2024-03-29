import { css } from '@emotion/react';
import {
  BackIcon,
  Box,
  BoxContent,
  BoxHeader,
  BoxItem,
  Input,
  linkCss,
  Spinner,
} from '@recipe-box/components';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AddIngredientForm } from '../components/AddIngredientForm';
import { Ingredient } from '../components/Ingredient';
import { fade, slide } from '../configs/variants';
import { useRecipeId } from '../hooks';
import { trpc } from '../trpc';

const MotionComponent = motion(Box);

const MotionBoxItem = motion(BoxItem);

const Ingredients = (): JSX.Element => {
  const recipeId = useRecipeId();
  const { isLoading, data } = trpc.recipe.byId.useQuery({
    id: recipeId,
  });

  const { mutate: updateRecipe } = trpc.recipe.update.useMutation();
  const [recipeName, setRecipeName] = useState(() => data?.name);

  if (isLoading) return <Spinner size='large' />;

  return (
    <MotionComponent
      variant='primary'
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={fade}
    >
      <BoxHeader>
        <Input
          size='big'
          isFullWidth
          value={recipeName ?? data?.name}
          onChange={(e): void => {
            setRecipeName(e.target.value);
          }}
          onBlur={(): void => {
            if (recipeName) {
              updateRecipe({ id: recipeId, name: recipeName });
            }
          }}
          isReadOnly
          canEdit
        />
        <Link to='/' role='link' aria-label='back' css={css(linkCss)}>
          <BackIcon height={24} width={24} />
        </Link>
      </BoxHeader>
      <BoxContent>
        <AnimatePresence>
          {data?.ingredients.map((ingredient) => (
            <MotionBoxItem
              initial='initial'
              animate='animate'
              exit='exit'
              variants={slide}
              key={ingredient.id}
            >
              <Ingredient {...ingredient} />
            </MotionBoxItem>
          ))}
        </AnimatePresence>
        <AddIngredientForm />
      </BoxContent>
    </MotionComponent>
  );
};

export default Ingredients;
