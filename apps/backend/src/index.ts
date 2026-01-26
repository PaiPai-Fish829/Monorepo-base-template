import { createExpressMiddleware } from '@trpc/server/adapters/express';
import express from 'express';
import { appRouter } from './routers/trpc-routers/index';
import { createContext } from './utils/trpc';

const app = express();

app.use(
  '/api/trpc',
  createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
