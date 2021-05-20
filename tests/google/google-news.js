module.exports = {
    '@tags': ['local', 'headless'],
    'Verify user can navigate to Google homepage by URL': function (browser) {
        const googleHome = browser.page.googleHomePage();

        googleHome.navigate();
        googleHome.waitForElementVisible('@logoPicture');
    },

    'Verify user can navigate to google news from search result': function (browser) {
        const googleHome = browser.page.googleHomePage();
        const googleResult = browser.page.googleResultPage();

        googleHome.verify.visible('@searchBar');
        googleHome.setValue('@searchBar', 'google news');
        browser.keys(browser.Keys.ENTER);
        googleResult.waitForElementVisible('@firstSearchResult', 15000);
        googleResult.click('@firstSearchResult');

    },

    'Verify google news search result': function (browser) {
        const googleNewsResult = browser.page.googleNewsResultPage();

        googleNewsResult.waitForElementVisible('@newsSearchBar');
        googleNewsResult.setValue('@newsSearchBar', 'nasa shares photos of lunar gateway space station to launch for moon');
        browser.keys(browser.Keys.ENTER);
        googleNewsResult.verify.containsText('@firstNewsSearchResult', 'shares photos');
    }
}