module.exports = {
    '@tags': ['local', 'headless'],
    'Verify if user can navigate to google': function (browser) {
        const google = browser.page.googleHomePage();

        google.navigate();
        google.waitForElementVisible('@searchBar', 15000);
    },

    'Validate search bar functionalities on suggested list': function (browser) {
        const google = browser.page.googleHomePage();

        google.verify.visible('@searchBar');
        google.setValue('@searchBar', '1600 Pennsylvania Ave NW Washington, DC 20500');
        google.waitForElementVisible('@firstSuggestion', 8000);
        google.verify.containsText('@firstSuggestion', '1600 pennsylvania');
        browser.keys(browser.Keys.ENTER);
        google.verify.containsText('@searchResults', '1600 Pennsylvania');
    },

    'Validate the functionality of Directions button': function (browser) {
        const google = browser.page.googleHomePage();

        google.waitForElementVisible('@directionsButton', 15000);
        google.click('@directionsButton');
        google.waitForElementNotPresent('@directionsButton', 15000);
    },
    
    'Verify destination field includes desired address': function (browser) {
        const google = browser.page.googleHomePage();

        google.waitForElementPresent('@destinationInput', 15000);
        google.verify.valueContains('@destinationInput', 'Pennsylvania');
    }
}