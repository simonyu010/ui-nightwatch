module.exports = {
    'Navigate to Kotobank homepage': function (browser) {
        browser.url('https://kotobank.jp/');
        browser.assert.urlContains('kotobank.jp')
        browser.verify.containsText('[id="toplogo"]', 'コトバンク');
        browser.waitForElementVisible('[id="toplogo"]', 15000);
    },

    'Search for コトバンク': function(browser) {
        //to-do add assertion to verify element is available to input value
        browser.setValue('[id="search_input"]', 'コトバンク');
        browser.click('[type="submit"]');
        browser.pause(2000);
    },

    'Check VOYAGE tab': function (browser) {
        //browser.refresh() ?
        browser.url('https://kotobank.jp/'); 
        browser.waitForElementVisible('[id="toplogo"]', 15000);
        //use a better selector
        browser.click('[id="ftWrap"] > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1) > img:nth-child(1)');
        browser.waitForElementVisible('[src="assets/img/vmlogo_white.png"]', 15000);
        browser.expect.element('[id="pc-menu"] > ul:nth-child(2) > li:nth-child(2) > a').text.to.contain('会社概要');
        browser.pause(2000);
    }
}