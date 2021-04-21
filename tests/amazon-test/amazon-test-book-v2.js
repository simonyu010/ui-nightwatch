module.exports = {
    'Navigate to Amazon homepage': function (browser) {
        const amazon = browser.page.amazonHomePage();
        amazon.navigate();
        amazon.waitForElementVisible('@searchBar', 15000);
    },

    'Search for book by ISBN-10': function (browser) {
        const amazon = browser.page.amazonHomePage();
        amazon.setValue('@searchBar', '9780679805274');
        browser.keys(browser.Keys.ENTER);
        amazon.verify.containsText('@bookName10', 'Oh');
    },

    'Search for book by ISBN-13': function (browser) {
        const amazon = browser.page.amazonHomePage();
        amazon.click('@searchBar');
        amazon.clearValue('@searchBar');
        amazon.setValue('@searchBar', '978-0679805274');
        browser.keys(browser.Keys.ENTER);
        amazon.verify.containsText('@bookName13', 'Oh');
    },

    'Add to cart function': function (browser) {
        const amazon = browser.page.amazonHomePage();
        amazon.click('@bookName13');
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