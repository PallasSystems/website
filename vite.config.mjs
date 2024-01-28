import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://pallas.uk/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    reporters: ['junit'],
    outputFile: 'junit.xml',
  },
});
