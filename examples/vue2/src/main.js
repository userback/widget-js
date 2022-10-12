import Vue from 'vue';
import './style.css';
import UserbackPlugin from '@userback/vue';
import App from './App.vue';

const token = import.meta.env?.VITE_UB_TOKEN;
const domain = import.meta.env?.VITE_UB_DOMAIN;

Vue.use(UserbackPlugin, { token, domain });
new Vue({ render: (h) => h(App) }).$mount('#app');
