import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { UserbackProvider } from '@userback/react'

// Get token from ../../.env
const token = import.meta.env?.VITE_UB_TOKEN;
const domain = import.meta.env?.VITE_UB_DOMAIN;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

        <UserbackProvider token={token} options={{domain}}>
            <App />
        </UserbackProvider>

);
