import * as dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

// @see https://nuxt.com/docs/api/configuration/nuxt-config#runtimeconfig
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            UB_TOKEN: process.env?.VITE_UB_TOKEN,
            UB_DOMAIN: process.env?.VITE_UB_DOMAIN,
        },
    },
});
