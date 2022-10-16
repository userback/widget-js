import * as dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    head: {
        title: 'Userback nuxt example',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/userback.client.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    alias: {
        // @FIXME: Appears to be an issue with .mjs not being loaded correctly
        '@userback/vue': '@userback/vue/dist/vue.js',
    },
    env: {
        UB_TOKEN: process.env?.VITE_UB_TOKEN,
        UB_DOMAIN: process.env?.VITE_UB_DOMAIN,
    },
};
