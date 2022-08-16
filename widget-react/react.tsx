/* eslint-disable */
import React, {
    createContext, useCallback, useContext, useRef, useState, useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import UserbackInit, {
    UserbackDestinationType, UserbackFeedbackType, UserbackFunctions, UserbackOptions, UserbackWidget, UserbackWidgetSettings,
} from '@userback/widget';
/* eslint-enable */

interface UserbackReactProps {
  token: string,
  options?: UserbackOptions,
  widgetSettings?: UserbackWidgetSettings,
}

const UserbackContext = createContext<UserbackFunctions | undefined>(
    undefined,
);

/**
 * UserbackProider
 *
 * @example `<UserbackProvider token={UB_TOKEN} ><MyRouter /></UserbackProvider>`
 * @returns React.Component
 */
export const UserbackProvider: React.FC<React.PropsWithChildren<UserbackReactProps>> = ({
    token,
    options,
    widgetSettings: widget_settings,
    children,
}) => {
    const ubLoaded = useRef(false);
    const [Userback, setUserback] = useState(undefined as UserbackWidget | undefined);

    const init = useCallback(async (_token: string, _options: UserbackOptions) => {
        ubLoaded.current = true;
        const ub = await UserbackInit(_token, _options);
        setUserback(ub);
        return ub;
    }, [setUserback]);

    // onMount
    useEffect(() => {
        if (!ubLoaded.current) {
            init(token, { widget_settings, ...options });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Api hooks
    const hide = useCallback(() => { Userback?.hide(); }, [Userback]);
    const show = useCallback(() => { Userback?.show(); }, [Userback]);
    const close = useCallback(() => { Userback?.close(); }, [Userback]);
    const openPortal = useCallback(() => { Userback?.openPortal(); }, [Userback]);
    const isLoaded = useCallback(() => Userback?.isLoaded() || false, [Userback]);

    const setName = useCallback((name: string) => { Userback?.setName(name); }, [Userback]);
    const setData = useCallback((data: any) => { Userback?.setData(data); }, [Userback]);
    const setEmail = useCallback((email: string) => { Userback?.setEmail(email); }, [Userback]);
    const setCategories = useCallback((categories: string) => { Userback?.setCategories(categories); }, [Userback]);
    const setPriority = useCallback((priority: string) => { Userback?.setPriority(priority); }, [Userback]);
    const addHeader = useCallback((key: string, value: string) => { Userback?.addHeader(key, value); }, [Userback]);

    const open = useCallback((feedback?: UserbackFeedbackType | undefined, destination?: UserbackDestinationType | undefined) => {
        Userback?.open(feedback, destination);
    }, [Userback]);

    const destroy = useCallback(() => {
        Userback?.destroy();
        setUserback(undefined);
        ubLoaded.current = false;
    }, [Userback]);

    const identify = useCallback((user_id: string, user_info: Object) => Userback?.identify(user_id, user_info), [Userback]);

    // Create the provider values, usable upstream by users
    const providerValue = React.useMemo<UserbackFunctions>(() => ({
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
    ]);

    return (<UserbackContext.Provider value={providerValue}>{children}</UserbackContext.Provider>);
};

UserbackProvider.defaultProps = {
    options: {},
    widgetSettings: undefined,
};

export const useUserbackContext = () => {
    const ctx = useContext(UserbackContext);
    if (ctx === undefined) {
        throw new Error('`useUserback` must be used within `UserbackProvider`.');
    }
    return ctx;
};

/* Provides the Userback api as React hooks */
export const useUserback = () => useUserbackContext();

export interface WithUserbackProps {
    userback: UserbackFunctions
}

/**
 * A higher Ordered Component for using hooks within a class based component
 * */
export function withUserback<T extends WithUserbackProps = WithUserbackProps>(
    Component: React.ComponentType<T>,
) {
    return function UserbackWrapper(props: Omit<T, keyof WithUserbackProps>) {
        const userback = useUserback();
        // eslint-disable-next-line react/jsx-props-no-spreading
        return (<Component {...props as T} userback={userback} />);
    };
}
