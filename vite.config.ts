import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: packageJson.name,
      fileName: (format) => `react-section-dividers.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@emotion/cache',
        '@emotion/hash',
        '@emotion/is-prop-valid',
        '@emotion/memoize',
        '@emotion/react',
        '@emotion/serialize',
        '@emotion/styled',
        '@emotion/styled/base',
        '@emotion/unitless',
        '@emotion/utils',
      ],
      output: {
        globals: {
          react: 'React',
          '@emotion/react': '@emotion/react',
        },
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    dts(),
  ],
});
