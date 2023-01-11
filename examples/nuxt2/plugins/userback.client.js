import Vue from 'vue';
import UserbackPlugin from '@userback/vue2';

const token = process.env.UB_TOKEN;
const domain = process.env.UB_DOMAIN;

Vue.use(UserbackPlugin, { token, domain });
