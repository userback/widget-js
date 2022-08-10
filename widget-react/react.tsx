import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import UserbackInit, { UserbackDestinationType, UserbackFeedbackType, UserbackFunctions, UserbackOptions, UserbackWidget, UserbackWidgetSettings } from '@userback/widget';

interface UserbackReactProps {
  token: string,
  options?: UserbackOptions,
  widgetSettings?: UserbackWidgetSettings,
}

interface UserbackContextValues {

}

const UserbackContext = createContext<UserbackContextValues | undefined>(
  undefined,
);

export const UserbackProvider: React.FC<React.PropsWithChildren<UserbackReactProps>> = ({
    token,
    options,
    widgetSettings: widget_settings,
    children,
}) => {
    const [isLoaded, setLoaded] = useState(false);
    const Userback: React.MutableRefObject<UserbackWidget | undefined> = useRef(undefined)


    const init = useCallback(async (token: string, options: UserbackOptions) => {
        return await UserbackInit(token, options).then((ub) => {
            setLoaded(true)
            Userback.current = ub
        })
    }, []) as (token: string, options: UserbackOptions) => Promise<UserbackWidget>

    if(!isLoaded){
        //init(token, {...options, widget_settings})
        UserbackInit(token, {...options, widget_settings}).then((ub) => {
            Userback.current = ub
        })
        setLoaded(true)
    }

    // Api hooks
    const hide = useCallback(() => {
        Userback.current?.hide()
    }, [])

    const show = useCallback(() => {
        Userback.current?.show()
    }, [])

    const open = useCallback((feedback?: UserbackFeedbackType | undefined, destination?: UserbackDestinationType | undefined) => {
        Userback.current?.open(feedback, destination)
    }, [])

    const close = useCallback(() => {
        Userback.current?.close()
    }, [])

    const destroy = useCallback(() => {
        Userback.current?.destroy()
        Userback.current = undefined
        setLoaded(false)
    }, [])

    const setData = useCallback((data: any) => {
        Userback.current?.setData(data)
    }, [])

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
