import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://www.pallas.uk/',
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['lcov'],
    },
    environment: 'jsdom',
    reporters: ['junit'],
    outputFile: 'junit.xml',
  },
});
