import { randomUUID } from 'node:crypto';
import { publicProcedure, router } from '../../utils/trpc';

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return randomUUID();
  }),
});

export type AppRouter = typeof appRouter;
