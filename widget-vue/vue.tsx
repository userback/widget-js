/* eslint-disable no-param-reassign */
import Userback, { UserbackWidget } from '@userback/widget';
import {
    install, Vue2, isVue2, Plugin,
} from 'vue-demi';

declare module 'vue' {
  export interface ComponentCustomProperties {
    $userback: UserbackWidget
  }
}

install();

const UserbackVue: Plugin = {
    install: (app: any, vueOptions: any) => {
        const { token, ...options } = vueOptions;
        Userback(token, options).then((ub) => {
            if (isVue2) {
                (Vue2 as any).prototype.$userback = ub;
            } else {
                app.config.globalProperties.$userback = ub;
            }
        });
    },
};

export default UserbackVue;
