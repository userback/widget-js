// Typescript Definitions
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
  is_live?: boolean,

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
  after_send?: (data: UserbackAfterSendData) => any,
}

interface UserbackAfterSendData {
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

interface UserbackFormSettings {
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
  widgetSettings?: {
    language?: 'en' | 'da' | 'de' | 'es' | 'et' | 'fi' | 'fr' | 'hu' | 'it' | 'jp' | 'ko' | 'lt' | 'pl' | 'pt' | 'pt-br' | 'nl' | 'no' | 'ro' | 'ru' | 'sk' | 'sv' | 'zh-CN' | 'zh-TW',
    style?: 'text' | 'circle',
    position?: string,
    trigger_type?: 'page_load' | 'api' | 'url_match',
    device_type?: 'desktop' | 'tablet' | 'phone',
    help_link?: string,
    help_title?: string,
    help_message?: string,
    logo?: string,
    form_settings: {
      general?: UserbackFormSettings,
      bug?: UserbackFormSettings,
      feature_request?: UserbackFormSettings,
    }
  },
}

export interface UserbackWidget extends UserbackOptions {
  init: (token: string, options: UserbackOptions) => Promise<UserbackWidget>,
  show: () => void,
  hide: () => void,
  open: (feedback_type?: 'general' | 'bug' | 'feature_request', destination?: 'screenshot' | 'video' | 'form') => void,
  close: () => void,
  destroy: () => void,
  /**
   * Reset custom data after JavaScript SDK is loaded.
   *
   * @param custom_data - A non-nested object containg custom metadata
   */
  setData: (custom_data: Object) => void,

  widget_settings: UserbackWidgetSettings,
  request_url: string,
  /* Your Userback.io token */
  access_token: string,
}

declare global {
  interface Window {
    Userback: UserbackWidget;
  }
}

/*
 * UserbackWidgetLoader
 *
 * Provides a type-safe interface for initializing and retrieving the Userback object
 */
export default function UserbackWidgetLoader(token: string, options?: UserbackOptions): Promise<UserbackWidget> {
    return new Promise((resolve, reject) => {
    // Validation
        if (typeof window.Userback !== 'undefined') { return reject('Userback widget loaded twice, canceling init'); }
        if (!token) { return reject('A valid token must be provided from https://userback.io'); }
        if (typeof options === 'undefined') { options = {}; }

        // Defaults
        const ubDomain = options?.domain || 'userback.io';
        // @NOTE: have to init the window.Userback in order to set request_url for localdev
        window.Userback = { request_url: `https://api.${ubDomain}` } as any;

        // Userback loaded
        function onload() {
            window.Userback.init(token, {
                ...options,
                on_load: () => {
                    if (typeof options?.on_load === 'function') { options.on_load(); }
                    resolve(window.Userback);
                },
            });
        }

        // Create and inject script tag on usage
        const script = document.createElement('script');
        script.src = `https://app.${ubDomain}/dist/js/widget.min.js`;
        script.async = true;
        script.onload = onload;
        script.onerror = (error) => reject(error);
        document.body.appendChild(script);
    });
}
