module.exports = {
    'Navigate to Amazon homepage': function (browser) {
        const amazon = browser.page.amazonHomePage();
        amazon.navigate();
        browser.pause(5000);
        amazon.waitForElementVisible('@mainAppFrame', 15000);
    },

    'Search for product 功夫茶': function(browser) {
        const amazon = browser.page.amazonHomePage();
        amazon.setValue('@searchBar', '功夫茶');
        browser.pause(2000);
    }
}