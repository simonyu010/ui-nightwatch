module.exports = {
    'Verify user can navigate to Google homepage by URL': function (browser) {
        const googleHome = browser.page.googleHomePage();

        googleHome.navigate();
        googleHome.waitForElementVisible('@logoPicture');
    },

    'Verify user can navigate to google news from search result': function (browser) {
        const googleHome = browser.page.googleHomePage();
        const googleNews = browser.page.googleNewsPage();
        const googleResult = browser.page.googleResultPage();

        googleHome.verify.visible('@searchBar');
        googleHome.setValue('@searchBar', 'google news');
        browser.keys(browser.Keys.ENTER);
        googleResult.waitForElementVisible('@searchResult', 15000);
        googleResult.click('@searchResult');
        googleNews.verify.visible('@forecastElement');
    },

    'Verify google news search result': function (browser) {
        const googleNewsResult = browser.page.googleNewsResultPage();

        googleNewsResult.waitForElementVisible('@searchBar', 15000);
        googleNewsResult.setValue('@searchBar', 'nasa shares photos of lunar gateway space station to launch for moon');
        browser.keys(browser.Keys.ENTER);
        googleNewsResult.verify.containsText('@searchResult', 'shares photos');
    }
}