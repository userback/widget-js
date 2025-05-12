import Userback from '@userback/widget';

/* eslint-disable no-param-reassign */
const UserbackVue = {
    install: (app, vueOptions) => {
        const { token, ...options } = vueOptions;
        Userback(token, options).then((ub) => {
            app.config.globalProperties.$userback = ub;
        });
    },
};

export { UserbackVue as default };
