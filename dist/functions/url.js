"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlPath = exports.currentUrl = void 0;
function currentUrl() {
    return '';
}
exports.currentUrl = currentUrl;
function urlPath(url) {
    if (url || typeof window !== 'undefined') {
        const parsedUrl = new URL(url || window.location.href);
        return parsedUrl.pathname;
    }
    return '';
}
exports.urlPath = urlPath;
//# sourceMappingURL=url.js.map