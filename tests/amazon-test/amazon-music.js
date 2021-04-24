module.exports = {
    'Verify user can navigate to AmazonUS by inputting zip code': function (browser) {
        const amazonHome = browser.page.amazonHomePage();

        amazonHome.navigate();
        amazonHome.waitForElementVisible('@locationButton', 15000);
        amazonHome.click('@locationButton');
        amazonHome.waitForElementVisible('@zipInput', 15000);
        amazonHome.setValue('@zipInput', '53186');
        amazonHome.click('@zipSubmitButton');

        browser.element('css selector', '[id$="Placeholder"]', function(result){
            if (result.value && result.value.ELEMENT) {
                amazonHome.waitForElementVisible('@finishButton');
                amazonHome.click('@finishButton');
            } else {
                amazonHome.waitForElementVisible('@doneButton');
                amazonHome.click('@doneButton');
            }
        });

        amazonHome.waitForElementVisible('@mainAppFrame', 15000);
    },

    'Verify user can go to music library by Nav list': function (browser) {
        const amazonHome = browser.page.amazonHomePage();

        // amazonHome.waitForElementVisible('@robotMopImage', 15000);
        // amazonHome.waitForElementVisible('@accountButton', 15000);
        browser.expect.element("body").text.to.contain('Success').before(60*1000);

        amazonHome.moveToElement('@accountButton', 1, 1);
        amazonHome.waitForElementVisible('@musicLibrary', 15000);
        amazonHome.click('@musicLibrary');
    },

    'Verify user can search by artist name': function (browser) {
        const amazonMusic = browser.page.amazonMusicPage();

        amazonMusic.waitForElementVisible('@navBarInput', 15000);
        amazonMusic.click('@navBarInput');
        amazonMusic.setValue('@navBarInput', 'Taylor Swift');
        browser.keys(browser.Keys.ENTER);
        amazonMusic.waitForElementVisible('@searchResults', 15000);
        amazonMusic.verify.containsText('@searchResults', 'Taylor Swift')
    }
}