import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'

interface UserbackProps {
  token: string,
  domain: string,
}

const useUserback = ( token: string, domain?: string ) => {
  useEffect(() => {
    // Validation
    if(!token){ return console.error('A valid token must be provided from https://userback.io') }
    const ubDomain = domain || 'userback.io'
    // Setup Userback configuration
    window.Userback = window.Userback || {};
    window.Userback.request_url = `https://api.${ubDomain}`;
    window.Userback.widget_css = `https://app.${ubDomain}/dist/css/widget.css`;
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
