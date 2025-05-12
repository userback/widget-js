'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var UserbackInit = require('@userback/widget');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var UserbackInit__default = /*#__PURE__*/_interopDefaultLegacy(UserbackInit);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const UserbackContext = React.createContext(undefined);
/**
 * UserbackProider
 *
 * @example `<UserbackProvider token={UB_TOKEN} ><MyRouter /></UserbackProvider>`
 * @returns React.Component
 */
const UserbackProvider = ({ token, options = {}, widgetSettings: widget_settings, delayInit = false, children, }) => {
    const ubLoaded = React.useRef(false);
    const [Userback, setUserback] = React.useState();
    const init = React.useCallback((_token = token, _options = Object.assign({ widget_settings }, options)) => __awaiter(void 0, void 0, void 0, function* () {
        if (Userback)
            return Userback;
        ubLoaded.current = true;
        const ub = yield UserbackInit__default["default"](_token, _options);
        setUserback(ub);
        return ub;
    }), [Userback, token, widget_settings, options]);
    // onMount
    React.useEffect(() => {
        if (!ubLoaded.current && !delayInit) {
            init(token, Object.assign({ widget_settings }, options));
        }
    }, [delayInit]); // eslint-disable-line react-hooks/exhaustive-deps
    // Api hooks
    const hide = React.useCallback(() => { Userback === null || Userback === void 0 ? void 0 : Userback.hide(); }, [Userback]);
    const show = React.useCallback(() => { Userback === null || Userback === void 0 ? void 0 : Userback.show(); }, [Userback]);
    const close = React.useCallback(() => { Userback === null || Userback === void 0 ? void 0 : Userback.close(); }, [Userback]);
    const openPortal = React.useCallback(() => { Userback === null || Userback === void 0 ? void 0 : Userback.openPortal(); }, [Userback]);
    const isLoaded = React.useCallback(() => (Userback === null || Userback === void 0 ? void 0 : Userback.isLoaded()) || false, [Userback]);
    const setName = React.useCallback((name) => { Userback === null || Userback === void 0 ? void 0 : Userback.setName(name); }, [Userback]);
    const setData = React.useCallback((data) => { Userback === null || Userback === void 0 ? void 0 : Userback.setData(data); }, [Userback]);
    const setEmail = React.useCallback((email) => { Userback === null || Userback === void 0 ? void 0 : Userback.setEmail(email); }, [Userback]);
    const setCategories = React.useCallback((categories) => { Userback === null || Userback === void 0 ? void 0 : Userback.setCategories(categories); }, [Userback]);
    const setPriority = React.useCallback((priority) => { Userback === null || Userback === void 0 ? void 0 : Userback.setPriority(priority); }, [Userback]);
    const addHeader = React.useCallback((key, value) => { Userback === null || Userback === void 0 ? void 0 : Userback.addHeader(key, value); }, [Userback]);
    const open = React.useCallback((feedback, destination) => {
        Userback === null || Userback === void 0 ? void 0 : Userback.open(feedback, destination);
    }, [Userback]);
    const destroy = React.useCallback(() => {
        Userback === null || Userback === void 0 ? void 0 : Userback.destroy();
        setUserback(undefined);
        ubLoaded.current = false;
    }, [Userback]);
    const identify = React.useCallback((user_id, user_info) => Userback === null || Userback === void 0 ? void 0 : Userback.identify(user_id, user_info), [Userback]);
    const openSurvey = React.useCallback((key) => Userback === null || Userback === void 0 ? void 0 : Userback.openSurvey(key), [Userback]);
    const closeSurvey = React.useCallback(() => Userback === null || Userback === void 0 ? void 0 : Userback.closeSurvey(), [Userback]);
    const refresh = React.useCallback(() => Userback === null || Userback === void 0 ? void 0 : Userback.refresh(), [Userback]);
    const showLauncher = React.useCallback(() => Userback === null || Userback === void 0 ? void 0 : Userback.showLauncher(), [Userback]);
    const hideLauncher = React.useCallback(() => Userback === null || Userback === void 0 ? void 0 : Userback.hideLauncher(), [Userback]);
    const startSessionReplay = React.useCallback((session_replay_option) => {
        Userback === null || Userback === void 0 ? void 0 : Userback.startSessionReplay(session_replay_option);
    }, [Userback]);
    const stopSessionReplay = React.useCallback(() => Userback === null || Userback === void 0 ? void 0 : Userback.stopSessionReplay(), [Userback]);
    const addCustomEvent = React.useCallback((event, data) => Userback === null || Userback === void 0 ? void 0 : Userback.addCustomEvent(event, data), [Userback]);
    // Create the provider values, usable upstream by users
    const providerValue = React__default["default"].useMemo(() => ({
        init,
        show,
        hide,
        open,
        close,
        destroy,
        setData,
        setEmail,
        setCategories,
        setPriority,
        addHeader,
        identify,
        openPortal,
        isLoaded,
        setName,
        openSurvey,
        closeSurvey,
        refresh,
        showLauncher,
        hideLauncher,
        startSessionReplay,
        stopSessionReplay,
        addCustomEvent,
    }), [
        init,
        show,
        hide,
        open,
        close,
        destroy,
        setData,
        setEmail,
        setCategories,
        setPriority,
        addHeader,
        identify,
        openPortal,
        isLoaded,
        setName,
        openSurvey,
        closeSurvey,
        refresh,
        showLauncher,
        hideLauncher,
        startSessionReplay,
        stopSessionReplay,
        addCustomEvent,
    ]);
    return (React__default["default"].createElement(UserbackContext.Provider, { value: providerValue }, children));
};
const useUserbackContext = () => {
    const ctx = React.useContext(UserbackContext);
    if (ctx === undefined) {
        throw new Error('`useUserback` must be used within `UserbackProvider`.');
    }
    return ctx;
};
/* Provides the Userback api as React hooks */
const useUserback = () => useUserbackContext();
/**
 * A higher Ordered Component for using hooks within a class based component
 * */
function withUserback(Component) {
    return function UserbackWrapper(props) {
        const userback = useUserback();
        // eslint-disable-next-line react/jsx-props-no-spreading
        return (React__default["default"].createElement(Component, Object.assign({}, props, { userback: userback })));
    };
}

exports.UserbackProvider = UserbackProvider;
exports.useUserback = useUserback;
exports.useUserbackContext = useUserbackContext;
exports.withUserback = withUserback;
