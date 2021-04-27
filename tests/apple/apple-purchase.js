module.exports = {
    'Navigate to Apple Homepage in U.S': function (browser) {
        const appleHome = browser.page.appleHomePage();

        appleHome.navigate();
        appleHome.waitForElementVisible('@landIndicator');

        browser.element('css selector', '[id="ac-ls-continue"]', function(result){
            if (result.value && result.value.ELEMENT) {
                appleHome.click('@regionContinue');
                appleHome.waitForElementVisible('@appleUsIndicator');
            } else {
                appleHome.verify.visible('@appleUsIndicator')
            }
        });
    },

    'Navigate to Mac purchase page': function (browser) {
        const appleHome = browser.page.appleHomePage();
        const macOverview = browser.page.appleMacPage();

        appleHome.waitForElementVisible('@macIcon');
        appleHome.click('@macIcon');
        macOverview.waitForElementVisible('@macTitle');
        macOverview.verify.urlContains('apple.com/mac/');
        macOverview.waitForElementVisible('@mac13InchBuy');
        macOverview.moveToElement('@mac13InchBuy', 2, 2);
        macOverview.click('@mac13InchBuy');
    },
    
    'Pick a 13 inch Macbook Pro': function (browser) {
        const macBuyPage = browser.page.appleMacBuyPage();

        macBuyPage.waitForElementVisible('@macBuyPageIndicator', 15000);
        macBuyPage.verify.containsText('@macBuyPageIndicator', 'Choose your new MacBook Pro.');
    }
}