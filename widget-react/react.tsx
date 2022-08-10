import React, { createContext, useCallback, useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import UserbackInit, { UserbackDestinationType, UserbackFeedbackType, UserbackFunctions, UserbackOptions, UserbackWidget, UserbackWidgetSettings } from '@userback/widget';

interface UserbackReactProps {
  token: string,
  options?: UserbackOptions,
  widgetSettings?: UserbackWidgetSettings,
}

const UserbackContext = createContext<UserbackFunctions | undefined>(
  undefined,
);

export const UserbackProvider: React.FC<React.PropsWithChildren<UserbackReactProps>> = ({
    token,
    options,
    widgetSettings: widget_settings,
    children,
}) => {
    const isLoaded = useRef(false);
    const [Userback, setUserback] = useState(undefined as UserbackWidget | undefined)

    const init = useCallback(async (token: string, options: UserbackOptions) => {
        isLoaded.current = true
        const ub = await UserbackInit(token, options)
        setUserback(ub)
        return ub
    }, [setUserback])

    useEffect(() => {
        if(!isLoaded.current){
            init(token, {...options, widget_settings})
        }
    }, [])

    // Api hooks
    const hide = useCallback(() => {
        Userback?.hide()
    }, [Userback])

    const show = useCallback(() => {
        Userback?.show()
    }, [Userback])

    const open = useCallback((feedback?: UserbackFeedbackType | undefined, destination?: UserbackDestinationType | undefined) => {
        Userback?.open(feedback, destination)
    }, [Userback])

    const close = useCallback(() => {
        Userback?.close()
    }, [Userback])

    const destroy = useCallback(() => {
        Userback?.destroy()
        setUserback(undefined)
        isLoaded.current = false
    }, [Userback])

    const setData = useCallback((data: any) => {
        Userback?.setData(data)
    }, [Userback])

    // Create the provider values, usable upstream by users
    const providerValue = React.useMemo<UserbackFunctions>(() => {
        return { init, show, hide, open, close, destroy, setData };
    }, [ init, show, hide, open, close, destroy, setData ]);

    return (<UserbackContext.Provider value={providerValue}>{children}</UserbackContext.Provider>)

}

export const useUserbackContext = () => {
    const ctx = useContext(UserbackContext);
    if (ctx === undefined) {
        throw new Error('`useUserback` must be used within `UserbackProvider`.');
    }
    return ctx
}

export const useUserback = () => {
    return useUserbackContext();
}
