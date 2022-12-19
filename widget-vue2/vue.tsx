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
            (Vue as any).prototype.$userback = ub;
        });
    },
};

export default UserbackVue;
