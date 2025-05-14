import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserbackProvider } from './UserbackProvider'; // eslint-disable-line import/no-unresolved
import App from './App'; // eslint-disable-line import/no-unresolved
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <UserbackProvider>
            <App />
        </UserbackProvider>
    </React.StrictMode>,
);
