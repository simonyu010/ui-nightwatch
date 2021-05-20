module.exports = {
    '@tags': ['local'],
    'Navigate to Apple Homepage in U.S': function (browser) {
        const appleHome = browser.page.appleHomePage();

        appleHome.navigate();
        appleHome.waitForElementVisible('@landIndicator');

        browser.element('css selector', '[id="ac-ls-continue"]', function(result){
            if (result.value && result.value.ELEMENT) {
                appleHome.click('@regionDismiss');
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

        browser.element('css selector', '[class$="maintitlebox"] h1', function (result) {
            if (result.value && result.value.ELEMENT) {
                macBuyPage.waitForElementVisible('@macBuyPageIndicator');
                macBuyPage.verify.containsText('@macBuyPageIndicator', 'Choose your new MacBook Pro.');
            } else {
                macBuyPage.navigate();
                macBuyPage.waitForElementVisible('@macBuyPageIndicator');
                macBuyPage.verify.containsText('@macBuyPageIndicator', 'Choose your new MacBook Pro.');
            }
        })

        macBuyPage.waitForElementVisible('@macBuyPageSelectButton');
        macBuyPage.click('@macBuyPageSelectButton');
    },

    'Customize my Macbook before purchase': function (browser) {
        const macCustomPage = browser.page.appleMacCustomizationPage();

        macCustomPage.waitForElementVisible('@macConfigMainTitle');
        macCustomPage.verify.containsText('@macConfigMainTitle', 'Customize your 13‑inch MacBook Pro - Space Gray')
    }
}