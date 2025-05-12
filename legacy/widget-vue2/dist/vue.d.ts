import { UserbackWidget } from '@userback/widget';
import { PluginObject } from 'vue';
declare module 'vue' {
    interface ComponentCustomProperties {
        $userback: UserbackWidget;
    }
}
declare const UserbackVue: PluginObject<UserbackWidget>;
export default UserbackVue;
