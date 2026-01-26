import type { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import type { Request, Response } from 'express';
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

export interface Context {
  req: Request
  res: Response
}

export async function createContext(opts: CreateExpressContextOptions): Promise<Context> {
  return {
    req: opts.req,
    res: opts.res,
  };
}

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;
