module.exports = {
    'Navigate to Amazon homepage': function (browser) {
        const amazon = browser.page.amazonHomePage();
        amazon.navigate();
        amazon.waitForElementVisible('@searchBar', 15000);
    },

    'Search for book by ISBN-10': function (browser) {
        const amazon = browser.page.amazonHomePage();
        amazon.setValue('@searchBar', '0745656064');
        browser.keys(browser.Keys.ENTER);
        amazon.verify.containsText('@bookName', 'Digital Media Ethics');
    },

    'Search for book by ISBN-13': function (browser) {
        const amazon = browser.page.amazonHomePage();
        amazon.click('@searchBar');
        amazon.clearValue('@searchBar');
        amazon.setValue('@searchBar', '978-0745656069');
        browser.keys(browser.Keys.ENTER);
        amazon.verify.containsText('@bookName', 'Digital Media Ethics');
    },

    'Add to cart function': function (browser) {
        const amazon = browser.page.amazonHomePage();
        amazon.click('@bookName');
        amazon.click('@addToCart');
        amazon.waitForElementVisible('@viewCart', 15000);
        amazon.click('@viewCart');
    },

    'Remove from cart function': function (browser) {
        const amazon = browser.page.amazonHomePage();
        amazon.waitForElementVisible('@DeleteFromCart', 15000);
        amazon.click('@DeleteFromCart');

    }
}