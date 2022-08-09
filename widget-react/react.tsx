import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { UserbackOptions, UserbackWidgetSettings } from '@userback/widget';


interface UserbackReactProps {
  token: string,
  domain?: string,
  options?: UserbackOptions,
  widgetSettings?: UserbackWidgetSettings,
}

export const useUserback = (token: string, domain?: string) => {
    // @TODO: Use the Userback upstream module for loading
    // This requires the use of async which requires the use of contexts/providers, not hooks
    useEffect(() => {
        // Validation
        if (!token) { return console.error('A valid token must be provided from https://userback.io'); }
        const ubDomain = domain || 'userback.io';

        // Setup Userback configuration
        window.Userback = {
            request_url: `https://api.${ubDomain}`,
            access_token: token,
        } as any;

        // Create and inject script tag on usage
        const script = document.createElement('script');
        script.src = `https://static.${ubDomain}/dist/js/widget.min.js`;
        script.async = true;
        document.body.appendChild(script);

        // On unmount
        return () => {
            document.body.removeChild(script);
        };
    });
};

export default function Userback({ token, domain }: UserbackReactProps) {
    useUserback(token, domain);
    return (<></>);
}
