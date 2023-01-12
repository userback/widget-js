import * as dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
    target: 'static',
    runtimeConfig: {
        public: {
            UB_TOKEN: process.env?.VITE_UB_TOKEN,
            UB_DOMAIN: process.env?.VITE_UB_DOMAIN,
        },
    },
});
