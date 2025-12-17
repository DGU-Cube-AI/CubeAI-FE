import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 환경변수 로드
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss(), svgr()],
    resolve: {
      alias: [{ find: '@', replacement: '/src' }],
    },
    server: {
      proxy: {
        '/api': {
          target: env.VITE_AI_BACKEND_URL || 'http://211.188.56.255:9022',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
          secure: false,
        },
        '/chat': {
          target: env.VITE_CHAT_BACKEND_URL || 'http://211.188.56.255:5000',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/chat/, ''),
          secure: false,
        },
      },
    },
  };
});
