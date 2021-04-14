module.exports = {
    'Navigate to Amazon homepage': function (browser) {
        browser.url('https://www.amazon.com/');
        browser.waitForElementVisible('[id="gw-desktop-herotator"]');
        browser.setValue('[id="twotabsearchtextbox"]', '功夫茶');
        browser.pause(2000);
    }
}