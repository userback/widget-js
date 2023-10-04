/* eslint-disable no-undef */
import UserbackPlugin from '@userback/vue';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const token = config.public.UB_TOKEN;
    const domain = config.public.UB_DOMAIN;
    nuxtApp.vueApp.use(UserbackPlugin, { token, domain });
});
