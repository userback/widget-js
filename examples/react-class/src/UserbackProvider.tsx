// UserbackProvider.jsx
import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import Userback from '@userback/widget';
import type {
    UserbackWidget,
    UserbackOptions,
    UserbackWidgetSettings,
} from '@userback/widget';

const UserbackContext = createContext<UserbackWidget | null>(null);

interface UserbackProviderProps {
    children: React.ReactNode;
}

export interface UserbackReactProps {
    token: string,
    options?: UserbackOptions,
    widgetSettings?: UserbackWidgetSettings,
    delayInit?: boolean,
}

// Get token from `../../.env`
const token = import.meta.env?.VITE_UB_TOKEN;
const domain = import.meta.env?.VITE_UB_DOMAIN;

export const UserbackProvider: React.FC<UserbackProviderProps> = ({ children }) => {
    const [userback, setUserback] = useState<UserbackWidget | null>(null);

    useEffect(() => {
        const init = async () => {
            const instance: UserbackWidget = await Userback(token, {
                user_data: {
                    id: '123456',
                    info: {
                        name: 'Jane Doe',
                        email: 'jane.doe@example.com',
                    },
                },
                domain,
                autohide: false,
            });

            setUserback(instance);
        };

        init();
    }, []);

    return (
        <UserbackContext.Provider value={userback}>
            {children}
        </UserbackContext.Provider>
    );
};

export const useUserback = () => useContext(UserbackContext);

export const withUserback = (WrappedComponent: any) => function Wrapper(props: any) {
    return (
        <UserbackContext.Consumer>
            {(userback) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <WrappedComponent userback={userback} {...props} />
            )}
        </UserbackContext.Consumer>
    );
};
