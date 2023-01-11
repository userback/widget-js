import Userback, { UserbackWidget } from '@userback/widget';
import { PluginObject } from 'vue';

declare module 'vue' {
  export interface ComponentCustomProperties {
    $userback: UserbackWidget
  }
}

const UserbackVue: PluginObject<UserbackWidget> = {
    install: (Vue, vueOptions: any) => {
        const { token, ...options } = vueOptions;
        Userback(token, options).then((ub: UserbackWidget) => {
            (Vue as any).prototype.$userback = ub; // eslint-disable-line no-param-reassign
        });
    },
};

export default UserbackVue;
