/// <reference types="vitest" />
import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
  },

  // vitest
  test: {
    environment: 'jsdom',
    // 전역 변수 활성화: `describe`, `test`, `expect` 등을 import 없이 바로 사용
    globals: true,
    // 설정 파일 위치
    setupFiles: './src/shared/lib/test/test-setup.ts',
    // 테스트 파일 대상
    include: ['**/*.test.{js,jsx,ts,tsx}'],
    coverage: {
      provider: 'v8',
    },
  },
  plugins: [
    visualizer({ open: true }) as PluginOption,
    // locatorjs 사용을 위해 변경
    // https://www.locatorjs.com/install/react-data-id?stack=Vite
    react({
      babel: {
        plugins: [
          // other Babel plugins
          [
            '@locator/babel-jsx/dist',
            {
              env: 'development',
            },
          ],
        ],
      },
    }),
  ],
});
