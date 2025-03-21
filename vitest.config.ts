// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js',
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    coverage: {
      provider: 'istanbul',
      // provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
    },
    exclude: [
      '**/node_modules/**',
      '**/*.js',
      '**/*.ts',
      'jest.config.ts',
      'postcss.config.js',
      'tailwind.config.js',
      'vite.config.ts',
      '**/coverage/**',
      '**/dist/**',
      '**/assets/**',
      'src/**/*.d.ts',
      "**/src/utils/**"
    ]
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      providers: path.resolve(__dirname, 'src/providers'),
    },
  },
  
});
