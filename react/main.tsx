import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'

interface UserbackProps {
  token: string,
  endpoint: string,
  src: string,
}

const useUserback = ({ token, endpoint, src }: UserbackProps) => {
  useEffect(() => {
    // Setup Userback configuration
    window.Userback = window.Userback || {};
    window.Userback.request_url = endpoint || 'https://api.userback.io.local';
    window.Userback.widget_css = 'https://app.userback.io.local/dist/css/widget.css';
    window.Userback.access_token = token || '1|1|mMtJD7dcQrg8I3tjOcKW61PDe';

    // Create and inject script tag on usage
    const script = document.createElement('script');
    script.src = src || 'https://app.userback.io.local/dist/js/widget.min.js';
    script.async = true;
    document.body.appendChild(script);
    // On unmount
    return () => {
      document.body.removeChild(script);
    }
  });
};

export default function Userback({ token, endpoint, src }) {
  useUserback({ token, endpoint, src })
  return (<></>)
}
