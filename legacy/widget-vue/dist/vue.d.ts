import { UserbackWidget } from '@userback/widget';
import { Plugin } from 'vue';
declare module 'vue' {
    interface ComponentCustomProperties {
        $userback: UserbackWidget;
    }
}
declare const UserbackVue: Plugin;
export default UserbackVue;
