'use client';

import React, {
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import Userback from '@userback/widget';
import type { UserbackWidget } from '@userback/widget';

const UserbackContext = createContext<UserbackWidget | null>(null);

interface UserbackProviderProps {
  children: React.ReactNode;
}

// Get token from `../../.env`
const token = 'YOUR_USERBACK_TOKEN';

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
