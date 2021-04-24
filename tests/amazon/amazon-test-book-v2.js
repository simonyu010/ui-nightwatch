module.exports = {
    'Verify user can navigate to Amazon homepage by URL': function (browser) {
        const amazonHome = browser.page.amazonHomePage();

        amazonHome.navigate();
        amazonHome.waitForElementVisible('@mainAppFrame', 15000);
    },

    'Verify search result by inputting ISBN-10': function (browser) {
        const amazonCommon = browser.page.amazonCommonPage();
        const amazonAfter = browser.page.amazonAfterSearchPage();

        amazonCommon.verify.visible('@searchBar');
        amazonCommon.setValue('@searchBar', '0745656064');
        browser.keys(browser.Keys.ENTER);
        amazonAfter.verify.containsText('@bookName', 'Digital Media Ethics');
    },

    'Validate search fuctionalities with ISBN-13': function (browser) {
        const amazonCommon = browser.page.amazonCommonPage();
        const amazonAfter = browser.page.amazonAfterSearchPage();

        amazonCommon.waitForElementVisible('@searchBar');
        amazonCommon.clearValue('@searchBar');
        amazonCommon.setValue('@searchBar', '978-0745656069');
        browser.keys(browser.Keys.ENTER);
        amazonAfter.verify.containsText('@bookName', 'Digital Media Ethics');
    },

    'Validate add to cart workflow': function (browser) {
        const amazonAfter = browser.page.amazonAfterSearchPage();
        const amazonProduct = browser.page.amazonProductPage();
        const amazonSummary = browser.page.amazonSummaryPage();

        amazonAfter.waitForElementVisible('@bookName', 15000);
        amazonAfter.click('@bookName');
        amazonProduct.waitForElementVisible('@addToCart', 15000);
        amazonProduct.click('@addToCart');
        amazonSummary.waitForElementVisible('@viewCart', 15000);
        amazonSummary.click('@viewCart');
    },

    'Validate remove from cart workflow': function (browser) {
        const amazonCart = browser.page.amazonCartPage();

        amazonCart.waitForElementVisible('@deleteFromCart', 15000);
        amazonCart.click('@deleteFromCart');
    }
}