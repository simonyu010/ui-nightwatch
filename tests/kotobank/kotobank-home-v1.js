module.exports = {
    'Navigate to Kotobank homepage': function (browser) {
        browser.url('https://kotobank.jp/');
        browser.verify.urlContains('kotobank.jp');
        browser.waitForElementVisible('[id="toplogo"]', 15000); 
        browser.verify.containsText('[id="toplogo"]', 'コトバンク'); 
    },

    'Search for ポケモン': function(browser) {
        browser.waitForElementVisible('[id="search_input"]', 15000);
        browser.getAttribute('[id="search_input"]', 'type', function(result){
            console.log(result);
            browser.verify.equal(result.value, 'text');
        })
        browser.setValue('[id="search_input"]', 'ポケモン');
        browser.click('[type="submit"]');
        browser.waitForElementVisible('[id="topicPath"] > li:nth-child(2)', 15000);
        browser.verify.containsText('[id="topicPath"] > li:nth-child(2)', 'ポケモン'); 
    },

    'Check VOYAGE tab': function (browser) {
        browser.back(); 
        browser.waitForElementVisible('[id="sponsor"] img', 15000);
        browser.click('[id="sponsor"] img'); 
        browser.waitForElementVisible('[src="assets/img/vmlogo_white.png"]', 15000);
        browser.expect.element('[id="pc-menu"] > ul:nth-child(2) > li:nth-child(2) > a').text.to.contain('会社概要');
    }
}