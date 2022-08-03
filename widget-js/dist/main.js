export default function UserbackWidget(token, options) {
    return new Promise(function(resolve, reject) {
        var onload = // Userback loaded
        function onload() {
            window.Userback.init(token, {
                //...options,
                on_load: function() {
                    console.log("widget is loaded");
                    if (typeof options.on_load === "function") {
                        options.on_load();
                    }
                    resolve(window.Userback);
                }
            });
        };
        // Validation
        if (typeof window.Userback !== "undefined") {
            return reject("Userback widget loaded twice, canceling init");
        }
        if (!token) {
            return reject("A valid token must be provided from https://userback.io");
        }
        // Defaults
        var ubDomain = options.domain || "userback.io";
        // @NOTE: have to init the window.Userback in order to set request_url for localdev
        window.Userback = {
            request_url: "https://api.".concat(ubDomain)
        };
        // Create and inject script tag on usage
        var script = document.createElement("script");
        script.src = "https://app.".concat(ubDomain, "/dist/js/widget.min.js");
        script.async = true;
        script.onload = onload;
        document.body.appendChild(script);
    });
};


//# sourceMappingURL=main.js.map