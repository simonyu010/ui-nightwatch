module.exports = {
    'Navigate to Google homepage': function (browser) {
        const google = browser.page.googleHomePage()

        google.navigate();
        google.waitForElementVisible('@searchBar', 15000);
    },

    'Test Suggestion list fuction': function (browser) {
        const google = browser.page.googleHomePage()

        google.click('@searchBar');
        google.setValue('@searchBar', '1600 Pennsylvania Ave NW Washington, DC 20500');
        google.waitForElementVisible('@firstSuggestion', 8000);
        google.verify.containsText('@firstSuggestion', '1600 pennsylvania');
        browser.pause(1000);
    },

    'Test Map Address': function (browser) {
        const google = browser.page.googleHomePage()

        browser.keys(browser.Keys.ENTER);
        google.verify.containsText('@searchResults', '1600 Pennsylvania');
    },

    'Test Navigate Button': function (browser) {
        const google = browser.page.googleHomePage()

        google.waitForElementPresent('@navigateButton', 15000);
        google.click('@navigateButton');
        google.waitForElementNotPresent('@navigateButton', 15000);
    },

    'Test Navigate Page': function (browser) {
        let address;
        const google = browser.page.googleHomePage()

        google.waitForElementPresent('@destinationInput', 15000);
        google.getText('@destinationInput', function(result){
            address=result.value;
            console.log('++++++++++++++++++++++++++++++++++++++', address);
        });
        // google.verify.containsText('@destinationInput', '1600');
    }
}