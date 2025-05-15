import { bootstrapApplication } from '@angular/platform-browser';
import Userback from '@userback/widget';
import type { UserbackOptions } from '@userback/widget';
// eslint-disable-next-line import/no-unresolved
import appConfig from './app/app.config';
// eslint-disable-next-line import/no-unresolved
import AppComponent from './app/app.component';
// eslint-disable-next-line import/no-unresolved
import UserbackService from './app/userback.service';

// Optional user data
const init_user_data: UserbackOptions = {
    user_data: {
        id: 123456,
        info: {
            name: 'someone',
            email: 'someone@example.com',
        },
    },
};

bootstrapApplication(AppComponent, appConfig)
    .then((ref) => {
        const { injector } = ref;
        const userbackService = injector.get(UserbackService);
        // After app is bootstrapped, initialize Userback
        const token = 'A-xtXCIX4j7s98BSz59dxzTZkcz'; // 'YOUR_USERBACK_TOKEN';
        Userback(token, init_user_data)
            .then((userbackInstance) => {
                userbackService.setInstance(userbackInstance);
                console.log('Userback successfully initialized');
            })
            .catch((err) => {
                console.error('Failed to load Userback', err);
            });
    })
    .catch((err) => console.error(err));
