'use strict';

var Userback = require('@userback/widget');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Userback__default = /*#__PURE__*/_interopDefaultLegacy(Userback);

/* eslint-disable no-param-reassign */
const UserbackVue = {
    install: (app, vueOptions) => {
        const { token, ...options } = vueOptions;
        Userback__default["default"](token, options).then((ub) => {
            app.config.globalProperties.$userback = ub;
        });
    },
};

module.exports = UserbackVue;
