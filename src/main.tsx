import './index.css';

import { StrictMode } from 'react';

import ReactDOM from 'react-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { queryClientConfig } from 'queries/config';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClientConfig}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root')
);
