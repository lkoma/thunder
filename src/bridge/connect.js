export default url => {
    if (!url) {
        return null;
    }
    // for WKWebView
    window.webkit.messageHandlers.ThunderApp.postMessage({ body: url });
    return null;
};
