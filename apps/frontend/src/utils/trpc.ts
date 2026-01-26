import type { AppRouter } from '../../../backend/src/routers/trpc-routers';
import {
  createTRPCClient,
  httpLink,
  httpSubscriptionLink,
  loggerLink,
  splitLink,
} from '@trpc/client';
import { createTRPCContext, createTRPCOptionsProxy } from '@trpc/tanstack-react-query';
import superjson from 'superjson';
import { queryClient } from './query-client';

export const { TRPCProvider, useTRPC, useTRPCClient } = createTRPCContext<AppRouter>();

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    loggerLink(),
    splitLink({
      condition: op => op.type === 'subscription',
      true: httpSubscriptionLink({
        url: '/api/trpc',
        transformer: superjson,
        eventSourceOptions: {
          withCredentials: true,
        },
      }),
      false: httpLink({
        url: '/api/trpc',
        transformer: superjson,
        async fetch(url, options) {
          const res = await fetch(url, {
            ...options,
            credentials: 'include',
          });
          return res;
        },
      }),
    }),
  ],
});

export const trpc = createTRPCOptionsProxy<AppRouter>({
  client: trpcClient,
  queryClient,
});
