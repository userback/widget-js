import UserbackWidget, { UserbackOptions } from '@userback/widget';

// Environment variables from `../../.env`
const token = (import.meta as any).env?.VITE_UB_TOKEN;
const domain = (import.meta as any).env?.VITE_UB_DOMAIN;

// Using options with typescript support
const options: UserbackOptions = {
    domain,
    name: 'Gavin Belson',
    after_send: (data) => {
        console.log(`Feedback recieved: ${data.email}`);
    },
};

// Initialise Userback and log the Userback object to console
UserbackWidget(token, options).then((userback) => {
    console.log('🚀 Userback Widget Loaded', userback);
});
