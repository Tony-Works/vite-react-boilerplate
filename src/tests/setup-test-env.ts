import '@testing-library/jest-dom/extend-expect';
import { configure, waitFor } from '@testing-library/react';
import { QueryCache, QueryClient, setLogger } from 'react-query';

import { server } from 'mocks';

const queryCache = new QueryCache();
const queryClient = new QueryClient();

configure({ defaultHidden: true });
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  queryCache.clear();
});

afterEach(async () => {
  await waitFor(() => {
    return expect(queryClient.isFetching()).toBe(0);
  });
});
