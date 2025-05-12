import Userback from '@userback/widget';

const UserbackVue = {
    install: (Vue, vueOptions) => {
        const { token, ...options } = vueOptions;
        Userback(token, options).then((ub) => {
            Vue.prototype.$userback = ub; // eslint-disable-line no-param-reassign
        });
    },
};

export { UserbackVue as default };
