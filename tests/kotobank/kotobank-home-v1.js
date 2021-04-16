module.exports = {
    'Navigate to Kotobank homepage': function (browser) {
        browser.url('https://kotobank.jp/');
        browser.waitForElementVisible('[id="toplogo"]', 15000);
    },

    'Search for product 功夫茶': function(browser) {
        browser.setValue('[id="search_input"]', '功夫茶');
        browser.pause(2000);
        browser.click('[type="submit"]');
        browser.pause(5000);
    }
}