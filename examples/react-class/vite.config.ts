import { defineConfig } from 'vite'; // eslint-disable-line
import react from '@vitejs/plugin-react'; // eslint-disable-line

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    envDir: '../../',
});
