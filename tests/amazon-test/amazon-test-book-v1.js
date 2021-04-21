module.exports = {
    'Navigate to Amazon homepage': function (browser) {
        browser.url('https://www.amazon.com/');
        browser.waitForElementVisible('[id="twotabsearchtextbox"]', 15000);
    },

    'Search for book by ISBN-10': function (browser) {
        browser.setValue('[id="twotabsearchtextbox"]', '0745656064');
        browser.keys(browser.Keys.ENTER);
        browser.verify.containsText('[class$="base a-text-normal"]', 'Digital Media Ethics');
    },

    'Search for book by ISBN-13': function (browser) {
        browser.click('[id="twotabsearchtextbox"]');
        browser.clearValue('[id="twotabsearchtextbox"]');
        browser.setValue('[id="twotabsearchtextbox"]', '978-0745656069');
        browser.keys(browser.Keys.ENTER);
        browser.verify.containsText('[class$="base a-text-normal"]', 'Digital Media Ethics');
    },

    'Add to cart function': function (browser) {
        browser.click('[class$="base a-text-normal"]');
        browser.click('[id="add-to-cart-button"]');
        browser.waitForElementVisible('[id="hlb-view-cart-announce"]',15000);
        browser.click('[id="hlb-view-cart-announce"]');
    },

    'Remove from cart function': function (browser) {
        browser.waitForElementVisible('[value="Delete"]',15000);
        browser.click('[value="Delete"]');
    }
}