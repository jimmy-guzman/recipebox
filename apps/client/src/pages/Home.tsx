import {
  Box,
  BoxContent,
  BoxHeader,
  BoxItem,
  Button,
  linkCss,
  Spinner,
  Typography,
} from '@recipe-box/components';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { AddRecipeForm } from '../components/AddRecipeForm';
import { fade, slide } from '../configs/variants';
import { trpc } from '../trpc';

const MotionBox = motion(Box);

const MotionBoxItem = motion(BoxItem);

const Home = (): JSX.Element => {
  const utils = trpc.useUtils();
  const { data, isLoading } = trpc.recipe.list.useQuery();
  const { mutate: deleteRecipe } = trpc.recipe.remove.useMutation({
    onSettled: async () => {
      await utils.recipe.list.invalidate();
    },
  });

  if (isLoading) return <Spinner size='large' />;

  return (
    <MotionBox
      variant='primary'
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={fade}
    >
      <BoxHeader>
        <Typography variant='h2'>Recipes</Typography>
      </BoxHeader>
      <BoxContent>
        <AnimatePresence>
          {data?.map((recipe) => (
            <MotionBoxItem
              initial='initial'
              animate='animate'
              exit='exit'
              variants={slide}
              key={recipe.id}
            >
              <Link to={`/recipe/${recipe.id}`} css={linkCss}>
                {recipe.name}
              </Link>
              <Button
                variant='secondary'
                ariaLabel={`delete ${recipe.name}`}
                onClick={(): void => {
                  deleteRecipe({ id: recipe.id });
                }}
              >
                X
              </Button>
            </MotionBoxItem>
          ))}
        </AnimatePresence>
        <AddRecipeForm />
      </BoxContent>
    </MotionBox>
  );
};

export default Home;
