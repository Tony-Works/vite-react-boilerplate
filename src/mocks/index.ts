import { rest } from 'msw';
import { setupServer } from 'msw/node';

export { rest };

export const server = setupServer();
