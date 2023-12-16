import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from '@tanstack/react-query';
import { httpBatchLink, TRPCClientError } from '@trpc/client';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './app';
import { trpc } from './trpc';

const queryCache = new QueryCache({
  onError: (error): void => {
    if (error instanceof TRPCClientError) {
      toast.error(error.message);
    } else {
      toast.error('Something went wrong');
    }
  },
});

const mutationCache = new MutationCache({
  onError: (error): void => {
    if (error instanceof TRPCClientError) {
      toast.error(error.message);
    } else {
      toast.error('Something went wrong');
    }
  },
});

export const Main = (): JSX.Element => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache,
        mutationCache,
      }),
  );
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
        }),
      ],
    }),
  );

  return (
    <QueryErrorResetBoundary>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <App />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </trpc.Provider>
    </QueryErrorResetBoundary>
  );
};
