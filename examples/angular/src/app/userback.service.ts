import { Injectable } from '@angular/core';
import type { UserbackWidget, UserbackFeedbackType, UserbackDestinationType } from '@userback/widget';

@Injectable({
    providedIn: 'root',
})
export default class UserbackService {
    private userbackInstance?: UserbackWidget;

    setInstance(instance: UserbackWidget) {
        this.userbackInstance = instance;
    }

    getInstance(): UserbackWidget | undefined {
        return this.userbackInstance;
    }

    destroy() {
        this.userbackInstance?.destroy();
        this.userbackInstance = undefined;
    }

    open(type: UserbackFeedbackType, mode?: UserbackDestinationType) {
        this.userbackInstance?.open(type, mode);
    }

    hideLauncher() {
        this.userbackInstance?.hide();
    }

    showLauncher() {
        this.userbackInstance?.show();
    }
}
