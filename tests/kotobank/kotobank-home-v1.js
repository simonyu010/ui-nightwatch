module.exports = {
    'Navigate to Kotobank homepage': function (browser) {
        browser.url('https://kotobank.jp/');
        browser.assert.urlContains('kotobank.jp') //use verify
        browser.verify.containsText('[id="toplogo"]', 'コトバンク'); //wait for should happen before this line
        browser.waitForElementVisible('[id="toplogo"]', 15000); 
    },

    'Search for ポケモン': function(browser) {
        browser.waitForElementVisible('[id="search_input"]', 15000);
        //to-do add assertion to verify element is available to input value
        browser.setValue('[id="search_input"]', 'ポケモン');
        browser.click('[type="submit"]');
        browser.waitForElementVisible('[id="topicPath"] > li:nth-child(2)', 15000);
        browser.assert.containsText('[id="topicPath"] > li:nth-child(2)', 'ポケモン'); //use verify
    },

    'Check VOYAGE tab': function (browser) {
        //browser.refresh() ?
        browser.back(); 
        browser.refresh();
        browser.waitForElementVisible('[id="toplogo"]', 15000);
        //use a better selector
        browser.click('[id="sponsor"] img'); //wait for this element before clicking instead of top logo
        browser.waitForElementVisible('[src="assets/img/vmlogo_white.png"]', 15000);
        browser.expect.element('[id="pc-menu"] > ul:nth-child(2) > li:nth-child(2) > a').text.to.contain('会社概要');
    }
}