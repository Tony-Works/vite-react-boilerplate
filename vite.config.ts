/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    watch: true,
    environment: 'happy-dom',
    setupFiles: ['./src/tests/setup-test-env.ts'],
    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    watchIgnore: ['.*\\/node_modules\\/.*', '.*\\/build\\/.*', '.*\\/dist\\/.*'],
  },
});
