// Typescript Definitions
/* eslint-disable no-unused-vars */
export interface UserbackAfterSendData {
  load_type: string,
  domain: string,
  page: string,
  email: string,
  description: string,
  update_reporter: true,
  comments: any,
  attachment_file_name: string,
  user_agent: string,
  window_x: number,
  window_y: number,
  resolution_x: number,
  resolution_y: number,
  categories: string,
  custom_data: Object,
  rating: string,
}

export interface UserbackFormSettings {
  rating_type?: 'star' | 'emoji' | 'heart' | 'thumb',
  rating_help_message?: string,
  name_field? : boolean,
  name_field_mandatory? : boolean,
  email_field? : boolean,
  email_field_mandatory? : boolean,
  title_field? : boolean,
  title_field_mandatory? : boolean,
  comment_field? : boolean,
  comment_field_mandatory? : boolean,
  display_category? : boolean,
  display_feedback? : boolean,
  display_attachment? : boolean,
  display_assignee? : boolean,
  display_priority? : boolean,
  main_button_text? : string,
  main_button_background_colour? : string,
  main_button_text_colour? : string,
}

export interface UserbackWidgetSettings {
    language?: 'en' | 'da' | 'de' | 'es' | 'et' | 'fi' | 'fr' | 'hu' | 'it' | 'jp' | 'ko' | 'lt' |
        'pl' | 'pt' | 'pt-br' | 'nl' | 'no' | 'ro' | 'ru' | 'sk' | 'sv' | 'zh-CN' | 'zh-TW',
    style?: 'text' | 'circle',
    position?: string,
    trigger_type?: 'page_load' | 'api' | 'url_match',
    device_type?: 'desktop' | 'tablet' | 'phone',
    help_link?: string,
    help_title?: string,
    help_message?: string,
    logo?: string,
    form_settings?: {
        general?: UserbackFormSettings,
        bug?: UserbackFormSettings,
        feature_request?: UserbackFormSettings,
    }
}

export interface UserbackOptions {
    /* Used to auto-fill the email field in the feedback form. */
    email?: string,
    /* Used to auto-fill the name field in the feedback form. */
    name?: string,
    /* Set categories in a comma-seperated string */
    categories?: string,
    /* Set the default priority */
    priority?: string,
    custom_data?: any,
    /* Is the environment publically accessible (html/css/js assets) */
    is_live?: boolean,
    /* Options for the widget */
    widget_settings?: UserbackWidgetSettings,
    /* Use browser built-in Screen Capture API to capture screenshots */
    native_screenshot?: boolean,
    domain?: string,
    on_init?: Function,
    on_load?: Function,
    /* The on_open event is triggered when the Feedback button is clicked */
    on_open?: Function,
    /* The on_close event is triggered when the Close button is clicked */
    on_close?: Function,
    /* The before_send event is triggered when the Send button is clicked */
    before_send?: Function,
    /* The after_send event is triggered after feedback has been submitted to Userback */
    after_send?: (data: UserbackAfterSendData) => any, // eslint-disable-line
    /* The on_error event is triggered when the widget fails to initialize */
    on_error?: (error: Error) => any, // eslint-disable-line
    /* user data to be sent to Userback */
    user_data?: any,
    // Userback Module Specific functions (not in window.Userback.init().options)
    autohide?: boolean,
    /* Timeout in milliseconds for widget initialization (default: 30000) */
    init_timeout?: number,
}

export type UserbackFeedbackType = 'general' | 'bug' | 'feature_request'
export type UserbackDestinationType = 'screenshot' | 'video' | 'form'
export interface UserbackFunctions {
    init: (token: string, options?: UserbackOptions) => Promise<UserbackWidget>,
    show: () => void,
    hide: () => void,
    open: (feedback_type?: UserbackFeedbackType, destination?: UserbackDestinationType) => void,
    openForm: (feedback_type?: UserbackFeedbackType, destination?: UserbackDestinationType) => void,
    close: () => void,
    destroy: () => void,
    isLoaded: () => boolean,
    /* Open the feedback portal */
    openPortal: () => void,
    setName: (name: string) => void,
    setEmail: (email: string) => void,
    setCategories: (categories: string) => void,
    setPriority: (priority: string) => void,
    identify: (user_id: string, user_info: Object) => void,
    addHeader: (key: string, value: string) => void,
    /**
     * Reset custom data after JavaScript SDK is loaded.
     *
     * @param custom_data - A non-nested object containg custom metadata
     */
    setData: (custom_data: Object) => void,
    openSurvey: (key: string) => void,
    closeSurvey: () => void,
    refresh: () => void,
    showLauncher: () => void,
    hideLauncher: () => void,
    startSessionReplay: (options: Object) => void,
    stopSessionReplay: () => void,
    addCustomEvent: (event: string, data: Object) => void
}

export interface UserbackWidget extends UserbackOptions, UserbackFunctions {
    /* Your Userback.io token */
    access_token: string,
    request_url: string,
}

declare global {
  interface Window {
    Userback: UserbackWidget | undefined;
  }
}

// An internal reference of the `window.Userback` object which will
// be deleted from the `window` scope when using this module.
let USERBACK: UserbackWidget | undefined;

/* eslint-enable no-unused-vars */
// internal variable for storing a pending load of the widget to prevent loading the widget twice
// When undefined, the widget is not currently loading.
let UBLoadingPromise: Promise<UserbackWidget> | undefined;
/*
 * UserbackWidgetLoader
 *
 * Provides a type-safe interface for initializing and retrieving the Userback object
 * @param token - The Userback token to use for initialisation
 * @param ubOptions - Optional configuration options for the Userback widget
 * @returns A promise that resolves to the UserbackWidget object
 */
export default function UserbackWidgetLoader(token: string, ubOptions?: UserbackOptions): Promise<UserbackWidget> {
    if (UBLoadingPromise) return UBLoadingPromise;

    UBLoadingPromise = new Promise((resolve, reject) => {
        // Validation
        const error = (e: string | Event) => {
            UBLoadingPromise = undefined;
            const errorObj = typeof e === 'string' ? new Error(e) : e;

            // Call user's on_error callback if provided
            if (typeof opts?.on_error === 'function') {
                try {
                    opts.on_error(errorObj instanceof Error ? errorObj : new Error('Unknown error'));
                } catch (callbackError) {
                    // eslint-disable-next-line no-console
                    console.error('Error in on_error callback:', callbackError);
                }
            }

            return reject(errorObj);
        };
        if (typeof USERBACK !== 'undefined') {
            // eslint-disable-next-line no-console
            console.debug('Userback widget loaded twice, canceling initialisation');
            return resolve(USERBACK);
        }
        if (!token) { return error('A valid token must be provided from https://userback.io'); }

        // Defaults
        const opts = typeof ubOptions === 'undefined' ? {} : ubOptions;
        const ubDomain = opts?.domain || 'userback.io';
        const initTimeout = opts?.init_timeout || 30000; // Default 30 seconds

        // Set up a timeout to prevent the promise from hanging indefinitely
        let timeoutId: ReturnType<typeof setTimeout> | undefined;
        let initCompleted = false;

        const setupTimeout = () => {
            timeoutId = setTimeout(() => {
                if (!initCompleted) {
                    error(
                        `Userback widget initialization timed out after ${initTimeout}ms. `
                        + 'This may indicate that the current domain is not allowed in your Userback project settings. '
                        + 'Please check your project configuration at https://userback.io',
                    );
                }
            }, initTimeout);
        };

        // Custom options
        window.Userback = { request_url: `https://api.${ubDomain}` } as any;
        if (opts?.autohide) {
            if (!opts.widget_settings) { opts.widget_settings = {}; }
            opts.widget_settings.trigger_type = opts.autohide ? 'api' : 'page_load';
        }

        // When the script tag is finished loading, we will move the `window.Userback` reference to
        // this local module and then provide it back as a promise resolution.
        function onload() {
            if (typeof window.Userback === 'undefined') {
                if (timeoutId) clearTimeout(timeoutId);
                return error('`window.Userback` was somehow deleted while loading!');
            }

            // Start timeout after script loads but before init completes
            setupTimeout();

            window.Userback.init(token, {
                ...opts,
                on_init: () => {
                    initCompleted = true;
                    if (timeoutId) clearTimeout(timeoutId);

                    USERBACK = window.Userback as UserbackWidget;
                    // @TODO: Cannot remove window.Userback as there are references inside the widget to it
                    // delete window.Userback

                    if (typeof opts?.on_init === 'function') { opts.on_init(); }

                    // Monkeypatch Userback.destroy to ensure we keep our USERBACK reference in sync
                    const origDestroy = USERBACK.destroy;
                    USERBACK.destroy = function proxyDestroy() {
                        origDestroy();
                        USERBACK = undefined;
                        UBLoadingPromise = undefined;
                    };
                    return resolve(USERBACK);
                },
            });
            return true;
        }

        // Create and inject the <script/> tag to start loading Userback
        const script = document.createElement('script');
        script.src = `https://static.${ubDomain}/widget/v1.js`;
        script.async = true;
        script.onload = onload;
        script.addEventListener('error', (e) => {
            if (timeoutId) clearTimeout(timeoutId);
            error(e);
        });
        document.body.appendChild(script);
        return true;
    });
    return UBLoadingPromise;
}

/**
 * Returns the UserbackWidget if it has been initialised
 * */
export function getUserback() {
    return USERBACK;
}

/**
 * Safe wrapper for the 'open' method that provides helpful error messages
 */
export function safeOpen(feedback_type?: UserbackFeedbackType, destination?: UserbackDestinationType): void {
    if (!USERBACK) {
        throw new Error(
            'Cannot call \'open\' - Userback widget is not initialized. '
            + 'Please ensure the widget has been initialized successfully before calling this method. '
            + 'Check that your domain is allowed in your Userback project settings.',
        );
    }
    return USERBACK.open(feedback_type, destination);
}

/**
 * Safe wrapper for the 'show' method that provides helpful error messages
 */
export function safeShow(): void {
    if (!USERBACK) {
        throw new Error(
            'Cannot call \'show\' - Userback widget is not initialized. '
            + 'Please ensure the widget has been initialized successfully before calling this method. '
            + 'Check that your domain is allowed in your Userback project settings.',
        );
    }
    return USERBACK.show();
}

/**
 * Safe wrapper for the 'hide' method that provides helpful error messages
 */
export function safeHide(): void {
    if (!USERBACK) {
        throw new Error(
            'Cannot call \'hide\' - Userback widget is not initialized. '
            + 'Please ensure the widget has been initialized successfully before calling this method. '
            + 'Check that your domain is allowed in your Userback project settings.',
        );
    }
    return USERBACK.hide();
}

/**
 * Safe wrapper for the 'showLauncher' method that provides helpful error messages
 */
export function safeShowLauncher(): void {
    if (!USERBACK) {
        throw new Error(
            'Cannot call \'showLauncher\' - Userback widget is not initialized. '
            + 'Please ensure the widget has been initialized successfully before calling this method. '
            + 'Check that your domain is allowed in your Userback project settings.',
        );
    }
    return USERBACK.showLauncher();
}

/**
 * Safe wrapper for the 'hideLauncher' method that provides helpful error messages
 */
export function safeHideLauncher(): void {
    if (!USERBACK) {
        throw new Error(
            'Cannot call \'hideLauncher\' - Userback widget is not initialized. '
            + 'Please ensure the widget has been initialized successfully before calling this method. '
            + 'Check that your domain is allowed in your Userback project settings.',
        );
    }
    return USERBACK.hideLauncher();
}
