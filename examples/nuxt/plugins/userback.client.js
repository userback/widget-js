/* eslint-disable no-undef */
import UserbackPlugin from '@userback/vue';

export default defineNuxtPlugin((nuxtApp) => {
    const { UB_TOKEN: token, UB_DOMAIN: domain } = useRuntimeConfig();
    nuxtApp.vueApp.use(UserbackPlugin, { token, domain });
});
