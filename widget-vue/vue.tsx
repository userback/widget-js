/* eslint-disable no-param-reassign */
import Userback, { UserbackWidget } from '@userback/widget';
import { Plugin } from 'vue';

declare module 'vue' {
  export interface ComponentCustomProperties {
    $userback: UserbackWidget
  }
}

const UserbackVue: Plugin = {
    install: (app, vueOptions) => {
        const { token, ...options } = vueOptions;
        Userback(token, options).then((ub) => {
            app.config.globalProperties.$userback = ub;
        });
    },
};

export default UserbackVue;
