import Userback, { UserbackWidget } from '@userback/widget';
import Vue, { Plugin } from 'vue';

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
                // eslint-disable-next-line no-param-reassign
                app.config.globalProperties.$userback = ub;
            } else {
                // Vue2
                (Vue as any).prototype.$userback = ub;
            }
        });
    },
};

export default UserbackVue;
