module.exports = {
    'Navigate to Kotobank homepage': function (browser) {
        browser.url('https://kotobank.jp/');
        browser.assert.urlContains('kotobank.jp')
        browser.verify.containsText('[id="toplogo"]', 'コトバンク');
        browser.waitForElementVisible('[id="toplogo"]', 15000);
    },

    'Search for コトバンク': function(browser) {
        browser.setValue('[id="search_input"]', 'コトバンク');
        browser.click('[type="submit"]');
        browser.pause(2000);
    }
}