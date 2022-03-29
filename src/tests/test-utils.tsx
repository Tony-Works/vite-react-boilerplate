import type { ReactElement } from 'react';

import type { RenderResult } from '@testing-library/react';

import {
  render as rtlRender,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

import { TestAppProviders } from './test-providers';

export const createRegexp = (pattern: RegExp | string): RegExp => {
  return new RegExp(pattern, 'i');
};

export const render = (ui: ReactElement): RenderResult => {
  return rtlRender(ui, { wrapper: TestAppProviders });
};

export const waitForLoadingToFinish = (): Promise<void> => {
  return waitForElementToBeRemoved(() => {
    return [...screen.queryAllByText(/loading/i)];
  });
};
