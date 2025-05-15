import "./chunk-WDMUDEB6.js";

// ../../widget-js/dist/widget.mjs
var USERBACK;
var UBLoadingPromise;
function UserbackWidgetLoader(token, ubOptions) {
  if (UBLoadingPromise) return UBLoadingPromise;
  UBLoadingPromise = new Promise((resolve, reject) => {
    const error = (e) => {
      UBLoadingPromise = void 0;
      return reject(typeof e === "string" ? new Error(e) : e);
    };
    if (typeof USERBACK !== "undefined") {
      console.debug("Userback widget loaded twice, canceling initialisation");
      return resolve(USERBACK);
    }
    if (!token) {
      return error("A valid token must be provided from https://userback.io");
    }
    const opts = typeof ubOptions === "undefined" ? {} : ubOptions;
    const ubDomain = (opts === null || opts === void 0 ? void 0 : opts.domain) || "userback.io";
    window.Userback = {
      request_url: `https://api.${ubDomain}`
    };
    if (opts === null || opts === void 0 ? void 0 : opts.autohide) {
      if (!opts.widget_settings) {
        opts.widget_settings = {};
      }
      opts.widget_settings.trigger_type = opts.autohide ? "api" : "page_load";
    }
    function onload() {
      if (typeof window.Userback === "undefined") {
        return error("`window.Userback` was somehow deleted while loading!");
      }
      window.Userback.init(token, Object.assign(Object.assign({}, opts), {
        on_init: () => {
          USERBACK = window.Userback;
          if (typeof (opts === null || opts === void 0 ? void 0 : opts.on_init) === "function") {
            opts.on_init();
          }
          const origDestroy = USERBACK.destroy;
          USERBACK.destroy = function proxyDestroy() {
            origDestroy();
            USERBACK = void 0;
            UBLoadingPromise = void 0;
          };
          return resolve(USERBACK);
        }
      }));
      return true;
    }
    const script = document.createElement("script");
    script.src = `https://static.${ubDomain}/widget/v1.js`;
    script.async = true;
    script.onload = onload;
    script.addEventListener("error", error);
    document.body.appendChild(script);
    return true;
  });
  return UBLoadingPromise;
}
function getUserback() {
  return USERBACK;
}
export {
  UserbackWidgetLoader as default,
  getUserback
};
//# sourceMappingURL=@userback_widget.js.map
