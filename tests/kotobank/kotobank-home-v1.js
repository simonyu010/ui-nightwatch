module.exports = {
    '@tags': ['local', 'headless'],
    'Navigate to Kotobank homepage': function (browser) {
        browser.url('https://kotobank.jp/');
        browser.verify.urlContains('kotobank.jp');
        browser.waitForElementVisible('[id="toplogo"]', 15000); 
        browser.verify.containsText('[id="toplogo"]', 'コトバンク'); 
    },

    'Search for ポケモン': function(browser) {
        browser.waitForElementVisible('[id="search_input"]', 15000);
        browser.getAttribute('[id="search_input"]', 'type', function(result){
            browser.verify.equal(result.value, 'text');
        })
        browser.setValue('[id="search_input"]', 'ポケモン');
        browser.click('[type="submit"]');
        browser.waitForElementVisible('[id="topicPath"] > li:nth-child(2)', 15000);
        browser.verify.containsText('[id="topicPath"] > li:nth-child(2)', 'ポケモン'); 
    },

    'Check VOYAGE tab': function (browser) {
        browser.back(); 
        browser.waitForElementVisible('[alt="C-POT"]', 15000);
        browser.click('[alt="C-POT"]'); 
        browser.waitForElementVisible('[class="cpot-main-logo"]', 15000);
        browser.verify.visible('[alt="Apollo"]');
    }
}