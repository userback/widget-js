import Vue from 'vue';
import UserbackPlugin from '@userback/vue';
// import { defineNuxtPlugin } from '@nuxtjs/composition-api';

const token = process.env.UB_TOKEN;
const domain = process.env.UB_DOMAIN;

Vue.use(UserbackPlugin, { token, domain });
// export default defineNuxtPlugin((nuxtApp) => {
//    nuxtApp.vueApp.use(UserbackPlugin, { token, domain })
// })
