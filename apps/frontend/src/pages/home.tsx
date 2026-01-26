import { useQuery } from '@tanstack/react-query';
import { useTRPC } from '@/utils/trpc';

export function Home() {
  const trpc = useTRPC();
  const queryOptions = trpc.hello.queryOptions();
  const { data } = useQuery(queryOptions);
  return (
    <div>
      Home
      {data}
    </div>
  );
}
