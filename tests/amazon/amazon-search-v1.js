module.exports = {
    'Navigate to Amazon homepage': function (browser) {
        browser.url('https://www.amazon.com/');
        browser.pause(5000);
        browser.waitForElementVisible('[id="gw-desktop-herotator"]', 15000);
    },

    'Search for product 功夫茶': function(browser) {
        browser.setValue('[id="twotabsearchtextbox"]', '功夫茶');
        browser.pause(2000);
    }
}