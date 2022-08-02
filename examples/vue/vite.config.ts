import { defineConfig } from 'vite'; // eslint-disable-line
import vue from '@vitejs/plugin-vue'; // eslint-disable-line

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    envDir: '../../',
});
