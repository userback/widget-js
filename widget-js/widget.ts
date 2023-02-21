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

    on_load?: Function,
    /* The on_open event is triggered when the Feedback button is clicked */
    on_open?: Function,
    /* The on_close event is triggered when the Close button is clicked */
    on_close?: Function,
    /* The before_send event is triggered when the Send button is clicked */
    before_send?: Function,
    /* The after_send event is triggered after feedback has been submitted to Userback */
    after_send?: (data: UserbackAfterSendData) => any, // eslint-disable-line

    // Userback Module Specific functions (not in window.Userback.init().options)
    autohide?: boolean,
}

export type UserbackFeedbackType = 'general' | 'bug' | 'feature_request'
export type UserbackDestinationType = 'screenshot' | 'video' | 'form'
export interface UserbackFunctions {
    init: (token: string, options?: UserbackOptions) => Promise<UserbackWidget>,
    show: () => void,
    hide: () => void,
    open: (feedback_type?: UserbackFeedbackType, destination?: UserbackDestinationType) => void,
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
    addHeader: (key: string, value: string) => void
    /**
     * Reset custom data after JavaScript SDK is loaded.
     *
     * @param custom_data - A non-nested object containg custom metadata
     */
    setData: (custom_data: Object) => void,
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
let UBLoadingPromise: Promise<UserbackWidget> | undefined;
/*
 * UserbackWidgetLoader
 *
 * Provides a type-safe interface for initializing and retrieving the Userback object
 */
export default function UserbackWidgetLoader(token: string, ubOptions?: UserbackOptions): Promise<UserbackWidget> {
    if (UBLoadingPromise) return UBLoadingPromise;

    UBLoadingPromise = new Promise((resolve, reject) => {
        // Validation
        const error = (e: string | Event) => reject(new Error(e.toString()));
        if (typeof USERBACK !== 'undefined') {
            // eslint-disable-next-line no-console
            console.debug('Userback widget loaded twice, canceling initialisation');
            return resolve(USERBACK);
        }
        if (!token) { return error('A valid token must be provided from https://userback.io'); }

        // Defaults
        const opts = typeof ubOptions === 'undefined' ? {} : ubOptions;
        const ubDomain = opts?.domain || 'userback.io';

        // Custom options
        window.Userback = { request_url: `https://api.${ubDomain}` } as any;
        if (opts?.autohide) {
            if (!opts.widget_settings) { opts.widget_settings = {}; }
            opts.widget_settings.trigger_type = opts.autohide ? 'api' : 'page_load';
        }

        // When the script tag is finished loading, we will move the `window.Userback` reference to
        // this local module and then provide it back as a promise resolution.
        function onload() {
            if (typeof window.Userback === 'undefined') { return error('`window.Userback` was somehow deleted while loading!'); }
            window.Userback.init(token, {
                ...opts,
                on_load: () => {
                    USERBACK = window.Userback as UserbackWidget;
                    // @TODO: Cannot remove window.Userback as there are references inside the widget to it
                    // delete window.Userback

                    if (typeof opts?.on_load === 'function') { opts.on_load(); }

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
        script.onerror = error;
        document.body.appendChild(script);
        return true;
    });
    UBLoadingPromise.catch(() => { UBLoadingPromise = undefined; });
    return UBLoadingPromise;
}

/**
 * Returns the UserbackWidget if it has been initialised
 * */
export function getUserback() {
    return USERBACK;
}
