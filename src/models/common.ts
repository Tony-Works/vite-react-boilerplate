import type { ReactNode } from 'react';

export type PropsWithChildren<T = object> = T & {
  children?: ReactNode;
};
