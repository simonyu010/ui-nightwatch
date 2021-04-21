module.exports = {
    'Navigate to Amazon homepage': function (browser) {
        browser.url('https://www.amazon.com/');
        browser.waitForElementVisible('[id="twotabsearchtextbox"]', 15000);
    },

    'Search for book by ISBN-10': function (browser) {
        browser.setValue('[id="twotabsearchtextbox"]', '9780679805274');
        browser.keys(browser.Keys.ENTER);
        browser.verify.containsText('[cel_widget_id="MAIN-SEARCH_RESULTS-1"] div:nth-child(3) h2 span', 'Oh');
    },

    'Search for book by ISBN-13': function (browser) {
        browser.click('[id="twotabsearchtextbox"]');
        browser.clearValue('[id="twotabsearchtextbox"]');
        browser.setValue('[id="twotabsearchtextbox"]', '978-0679805274');
        browser.keys(browser.Keys.ENTER);
        browser.verify.containsText('[cel_widget_id="MAIN-SEARCH_RESULTS-2"] div:nth-child(3) h2 span', 'Oh');
    },

    'Add to cart function': function (browser) {
        browser.click('[cel_widget_id="MAIN-SEARCH_RESULTS-2"] div:nth-child(3) h2 span');
        browser.click('[id="add-to-cart-button"]');
        browser.waitForElementVisible('[id="hlb-view-cart-announce"]',15000);
        browser.click('[id="hlb-view-cart-announce"]');
    },

    'Remove from cart function': function (browser) {
        browser.waitForElementVisible('[value="Delete"]',15000);
        browser.click('[value="Delete"]');
    }
}