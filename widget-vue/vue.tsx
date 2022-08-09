import Userback, { UserbackWidget } from '@userback/widget';
import { App, Plugin } from 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $userback: UserbackWidget
  }
}

const UserbackVue: Plugin = {
    install: (app, vueOptions) => {
        const { token, options } = vueOptions.userback
        Userback(token, options).then(ub => {
            app.config.globalProperties.$userback = ub
        })
    }
}

export default UserbackVue
