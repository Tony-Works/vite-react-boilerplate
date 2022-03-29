import type { ReactElement } from 'react';

import type { PropsWithChildren } from 'models';

import { QueryClient, QueryClientProvider } from 'react-query';

const createTestQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
};

export const TestAppProviders = (props: PropsWithChildren): ReactElement => {
  const { children } = props;

  const testQueryClient = createTestQueryClient();
  return <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>;
};
