import { createVuePlugin } from 'vite-plugin-vue2'; // eslint-disable-line

// https://vitejs.dev/config/
export default {
    plugins: [createVuePlugin()],
    envDir: '../../',
};
