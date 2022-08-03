
export default function UserbackWidget(token: string, options){
  return new Promise(function(resolve, reject){

    // Validation
    if(typeof window.Userback !== 'undefined'){ return reject('Userback widget loaded twice, canceling init') }
    if(!token){ return reject('A valid token must be provided from https://userback.io') }

    // Defaults
    const ubDomain = options.domain || 'userback.io'
    // @NOTE: have to init the window.Userback in order to set request_url for localdev
    window.Userback = { request_url: `https://api.${ubDomain}` }

    // Userback loaded
    function onload(){
      window.Userback.init(token, {
        //...options,
        on_load: () => {
          console.log('widget is loaded');
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
    document.body.appendChild(script);

  })
}
