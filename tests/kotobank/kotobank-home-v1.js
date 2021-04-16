module.exports = {
    'Navigate to Kotobank homepage': function (browser) {
        browser.url('https://kotobank.jp/');
        browser.waitForElementVisible('[id="toplogo"]', 15000);
    },

    'Search for コトバンク': function(browser) {
        browser.setValue('[id="search_input"]', 'コトバンク');
        browser.click('[type="submit"]');
        browser.pause(5000);
    }
}