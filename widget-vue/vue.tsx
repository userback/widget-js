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
            if (typeof app.config.globalProperties !== 'undefined') {
                // Vue3
                app.config.globalProperties.$userback = ub;
            } else {
                // Vue2
                import('vue').then((Vue) => {
                    (Vue as any).prototype.$userback = ub;
                });
            }
        });
    },
};

export default UserbackVue;
