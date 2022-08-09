import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import UserbackPlugin from '@userback/vue'

const token = import.meta.env?.VITE_UB_TOKEN;
const domain = import.meta.env?.VITE_UB_DOMAIN;

createApp(App)
    .use(UserbackPlugin, { token, domain })
    .mount('#app')
