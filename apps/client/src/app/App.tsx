import {
  Footer,
  GlobalStyles,
  GridRow,
  Header,
  Instructions,
  PageWrapper,
  Spinner,
} from '@recipe-box/components';
import { AnimatePresence } from 'framer-motion';
import { cloneElement, Suspense } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import Home from '../pages/Home';
import Ingredients from '../pages/Ingredients';

export const App = (): JSX.Element => {
  const location = useLocation();

  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/recipe/:id',
      element: <Ingredients />,
    },
  ]);

  return (
    <PageWrapper>
      <GlobalStyles />
      <Header />
      <Instructions />
      <Suspense fallback={<Spinner size='large' />}>
        <GridRow>
          {element && (
            <AnimatePresence mode='wait'>
              {cloneElement(element, { key: location.pathname })}
            </AnimatePresence>
          )}
        </GridRow>
      </Suspense>
      <Footer />
    </PageWrapper>
  );
};
