import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router';
import { queryClient } from './utils/query-client';
import { trpcClient, TRPCProvider } from './utils/trpc';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <TRPCProvider trpcClient={trpcClient} queryClient={queryClient}>
        <RouterProvider router={router} />
      </TRPCProvider>
    </QueryClientProvider>
  </StrictMode>,

);
