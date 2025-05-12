(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@userback/widget')) :
    typeof define === 'function' && define.amd ? define(['@userback/widget'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.UserbackVue = factory(global.Userback));
})(this, (function (Userback) { 'use strict';

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

    return UserbackVue;

}));
