// Typescript Definitions
export interface UserbackOptions {
  email?: string,
  name?: string,
  categories?: string,
  priority?: string,
  custom_data?: any,
  is_live?: boolean,
  native_screenshot?: boolean,
  domain?: string,

  on_load?: Function,
  on_open?: Function,
  on_close?: Function,
  before_send?: Function,
  after_send?: Function,
}

interface UserbackFormSettings {
  rating_type: "star" | "emoji" | "heart" | "thumb",
  rating_help_message: string,
  name_field                    : boolean,
  name_field_mandatory          : boolean,
  email_field                   : boolean,
  email_field_mandatory         : boolean,
  title_field                   : boolean,
  title_field_mandatory         : boolean,
  comment_field                 : boolean,
  comment_field_mandatory       : boolean,
  display_category              : boolean,
  display_feedback              : boolean,
  display_attachment            : boolean,
  display_assignee              : boolean,
  display_priority              : boolean,
  main_button_text              : string,
  main_button_background_colour : string,
  main_button_text_colour       : string,
}

export interface UserbackWidgetSettings {
  widgetSettings?: {
    language: "en" | "da" | "de" | "es" | "et" | "fi" | "fr" | "hu" | "it" | "jp" | "ko" | "lt" | "pl" | "pt" | "pt-br" | "nl" | "no" | "ro" | "ru" | "sk" | "sv" | "zh-CN" | "zh-TW",
    style: "text" | "circle",
    position: string,
    trigger_type: "page_load" | "api" | "url_match",
    device_type?: "desktop" | "tablet" | "phone",
    help_link: string,
    help_title: string,
    help_message: string,
    logo: string,
    form_settings: {
      general: UserbackFormSettings,
      bug: UserbackFormSettings,
      feature_request: UserbackFormSettings,
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
  setData: (custom_data: Object) => void,

  widget_settings: UserbackWidgetSettings,
  request_url: string,
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
  return new Promise(function(resolve, reject) {

    // Validation
    if(typeof window.Userback !== 'undefined'){ return reject('Userback widget loaded twice, canceling init') }
    if(!token){ return reject('A valid token must be provided from https://userback.io') }

    // Defaults
    const ubDomain = options?.domain || 'userback.io'
    // @NOTE: have to init the window.Userback in order to set request_url for localdev
    window.Userback = { request_url: `https://api.${ubDomain}` } as any

    // Userback loaded
    function onload(){
      window.Userback.init(token, {
        ...options,
        on_load: () => {
          if(typeof options?.on_load === 'function'){ options.on_load(); }
          resolve(window.Userback)
        }
      });
    }

    // Create and inject script tag on usage
    const script = document.createElement('script');
    script.src = `https://app.${ubDomain}/dist/js/widget.min.js`;
    script.async = true;
    script.onload = onload;
    script.onerror = (error) => reject(error);
    document.body.appendChild(script);
  })
}
