import React, { useEffect } from "react";
var useUserback = function(param) {
    var token = param.token, endpoint = param.endpoint, src = param.src;
    useEffect(function() {
        // Setup Userback configuration
        window.Userback = window.Userback || {};
        window.Userback.request_url = endpoint || "https://api.userback.io.local";
        window.Userback.widget_css = "https://app.userback.io.local/dist/css/widget.css";
        window.Userback.access_token = token || "1|1|mMtJD7dcQrg8I3tjOcKW61PDe";
        // Create and inject script tag on usage
        var script = document.createElement("script");
        script.src = src || "https://app.userback.io.local/dist/js/widget.min.js";
        script.async = true;
        document.body.appendChild(script);
        // On unmount
        return function() {
            document.body.removeChild(script);
        };
    });
};
export default function Userback(param) {
    var token = param.token, endpoint = param.endpoint, src = param.src;
    useUserback({
        token: token,
        endpoint: endpoint,
        src: src
    });
    return /*#__PURE__*/ React.createElement(React.Fragment, null);
};


//# sourceMappingURL=main.js.map