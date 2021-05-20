module.exports = {
    '@tags': ['local', 'headless'],
    'Navigate to Kotobank homepage': function (browser) {
        const kotobank = browser.page.kotobankHomePage()
        kotobank.navigate();
        kotobank.waitForElementVisible('@topLogo', 15000); 
        kotobank.verify.urlContains('kotobank.jp');
        kotobank.verify.containsText('@topLogo', 'コトバンク'); 
    },

    'Search for ポケモン': function(browser) {
        const kotobank = browser.page.kotobankHomePage()
        kotobank.waitForElementVisible('@searchBar', 15000);
        kotobank.getAttribute('@searchBar', 'type', function(result){
            kotobank.verify.equal(result.value, 'text');
        })
        kotobank.setValue('@searchBar', 'ポケモン');
        kotobank.click('@submitButton');
        kotobank.waitForElementVisible('@topicPath', 15000);
        kotobank.verify.containsText('@topicPath', 'ポケモン'); 
    },

    'Check VOYAGE tab': function (browser) {
        const kotobank = browser.page.kotobankHomePage();
        const voyage = browser.page.voyageHomePage();
        browser.back(); 
        kotobank.waitForElementVisible('@sponsorButton', 15000);
        kotobank.click('@sponsorButton'); 
        voyage.waitForElementVisible('@voyageLogo', 15000);
        voyage.expect.element('@voyageCompanyIntro').text.to.contain('会社概要');
    }
}