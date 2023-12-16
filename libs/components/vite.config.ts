import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react({ jsxImportSource: '@emotion/react' })],
    server: {
      port: parseInt(env.PORT, 10),
    },
    test: {
      environment: 'happy-dom',
      globals: true,
      setupFiles: './vitest.setup.ts',
    },
  };
});
