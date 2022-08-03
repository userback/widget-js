import React, { useEffect } from "react";
var useUserback = function(token, domain) {
    useEffect(function() {
        // Validation
        if (!token) {
            return console.error("A valid token must be provided from https://userback.io");
        }
        var ubDomain = domain || "userback.io";
        // Setup Userback configuration
        window.Userback = window.Userback || {};
        window.Userback.request_url = "https://api.".concat(ubDomain);
        window.Userback.access_token = token;
        // Create and inject script tag on usage
        var script = document.createElement("script");
        script.src = "https://app.".concat(ubDomain, "/dist/js/widget.min.js");
        script.async = true;
        document.body.appendChild(script);
        // On unmount
        return function() {
            document.body.removeChild(script);
        };
    });
};
export default function Userback(param) {
    var token = param.token, domain = param.domain;
    useUserback(token, domain);
    return /*#__PURE__*/ React.createElement(React.Fragment, null);
};


//# sourceMappingURL=main.js.map