module.exports = {
    'Navigate to Amazon homepage': function (browser) {
        const amazonHome = browser.page.amazonHomePage();

        amazonHome.navigate();
        amazonHome.waitForElementVisible('@mainAppFrame', 15000);
    },

    'Search for book by ISBN-10': function (browser) {
        const amazonHeader = browser.page.amazonCommonPage();
        const afterSearch = browser.page.amazonAfterSearchPage();

        amazonHeader.verify.visible('@searchBar');
        amazonHeader.setValue('@searchBar', '0745656064');
        browser.keys(browser.Keys.ENTER);
        afterSearch.verify.containsText('@bookName', 'Digital Media Ethics');
    },

    'Search for book by ISBN-13': function (browser) {
        const amazonHeader = browser.page.amazonCommonPage();
        const amazonResultPage = browser.page.amazonAfterSearchPage();

        amazonHeader.waitForElementVisible('@searchBar');
        amazonHeader.clearValue('@searchBar');
        amazonHeader.setValue('@searchBar', '978-0745656069');
        browser.keys(browser.Keys.ENTER);
        amazonResultPage.verify.containsText('@bookName', 'Digital Media Ethics');
    },

    'Add to cart function': function (browser) {
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

    // 'Remove from cart function': function (browser) {
    //     const amazon = browser.page.amazon();
    //     amazon.waitForElementVisible('@DeleteFromCart', 15000);
    //     amazon.click('@DeleteFromCart');

    // }
}