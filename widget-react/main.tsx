import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'

interface UserbackProps {
  token: string,
  domain?: string,
  options?: {
    email: string,
    name: string,
    categories: string,
    priority: string,
    custom_data: any,
    is_live: boolean,
    native_screenshot: boolean,
  },
  widgetSettings?: {
    language: string,
    style: string,
    position: string,
    trigger_type: string,
    device_type?: "desktop" | "tablet" | "phone",
    help_link: string,
    help_title: string,
    help_message: string,
    logo: string,
    form_settings: {
      general: {
        rating_type: "star" | "emoji" | "heart" | "thumb",
        rating_help_message: string,
        // @TODO
      }
    }
  },
}

const useUserback = ( token: string, domain?: string ) => {
  useEffect(() => {
    // Validation
    if(!token){ return console.error('A valid token must be provided from https://userback.io') }
    const ubDomain = domain || 'userback.io'
    // Setup Userback configuration
    window.Userback = window.Userback || {};
    window.Userback.request_url = `https://api.${ubDomain}`;
    window.Userback.access_token = token;

    // Create and inject script tag on usage
    const script = document.createElement('script');
    script.src = `https://app.${ubDomain}/dist/js/widget.min.js`;
    script.async = true;
    document.body.appendChild(script);
    // On unmount
    return () => {
      document.body.removeChild(script);
    }
  });
};

export default function Userback({ token, domain }: UserbackProps) {
  useUserback( token, domain )
  return (<></>)
}
