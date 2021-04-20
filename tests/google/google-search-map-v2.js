module.exports = {
    'Navigate to Google homepage': function (browser) {
        const google = browser.page.googleHomePage()
        google.navigate();
        google.waitForElementVisible('@searchBar', 15000);
    },

    'Test Suggestion list fuction': function (browser) {
        const google = browser.page.googleHomePage()
        google.click('@searchBar');
        google.setValue('@searchBar', 'White House Address');
        google.waitForElementVisible('@firstSuggestion', 8000);
        browser.pause(1000);
    },

    'Test Map Address': function (browser) {
        const google = browser.page.googleHomePage()
        browser.keys(browser.Keys.ENTER);
        google.verify.containsText('@searchResults', '1600 Pennsylvania');
    },
}