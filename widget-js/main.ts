interface UserbackWidget {
  init: Function,
}

declare global {
  interface Window {
    Userback: UserbackWidget;
  }
}

export default function UserbackWidgetLoader(token: string, options: any): Promise<UserbackWidget> {
  return new Promise(function(resolve, reject) {

    // Validation
    if(typeof window.Userback !== 'undefined'){ return reject('Userback widget loaded twice, canceling init') }
    if(!token){ return reject('A valid token must be provided from https://userback.io') }

    // Defaults
    const ubDomain = options.domain || 'userback.io'
    // @NOTE: have to init the window.Userback in order to set request_url for localdev
    window.Userback = { request_url: `https://api.${ubDomain}` } as any

    // Userback loaded
    function onload(){
      window.Userback.init(token, {
        //...options,
        on_load: () => {
          if(typeof options.on_load === 'function'){ options.on_load(); }
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
