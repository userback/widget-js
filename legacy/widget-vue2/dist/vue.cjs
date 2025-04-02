'use strict';

var Userback = require('@userback/widget');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Userback__default = /*#__PURE__*/_interopDefaultLegacy(Userback);

const UserbackVue = {
    install: (Vue, vueOptions) => {
        const { token, ...options } = vueOptions;
        Userback__default["default"](token, options).then((ub) => {
            Vue.prototype.$userback = ub; // eslint-disable-line no-param-reassign
        });
    },
};

module.exports = UserbackVue;
