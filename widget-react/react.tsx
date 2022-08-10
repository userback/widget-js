import React, { createContext, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import UserbackInit, { UserbackOptions, UserbackWidget, UserbackWidgetSettings } from '@userback/widget';

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

    if(!isLoaded){
        UserbackInit(token, {...options, widget_settings}).then((ub) => {
            setLoaded(true)
            Userback.current = ub
        })
    }

    const providerValue = {}
    return (<UserbackContext.Provider value={providerValue}>{children}</UserbackContext.Provider>)

}
