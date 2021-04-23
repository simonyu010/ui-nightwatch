module.exports = {
    'Verify user can navigate to AmazonUS by inputting zip code': function (browser) {
        const amazonHome = browser.page.amazonHomePage();

        amazonHome.navigate();
        amazonHome.waitForElementVisible('@locationButton', 15000);
        amazonHome.click('@locationButton');
        amazonHome.waitForElementVisible('@zipInput', 15000);
        amazonHome.setValue('@zipInput', '53186');
        amazonHome.click('@zipSubmitButton');
        amazonHome.waitForElementVisible('@finishButton', 15000);
        // amazonHome.click('@finishButton');
        amazonHome.waitForElementVisible('@mainAppFrame', 15000);
    },

    'Verify user can go to music library by Nav list': function (browser) {
        const amazonHome = browser.page.amazonHomePage();
        
        amazonHome.waitForElementVisible('@robotMopImage', 15000);
        // amazonHome.waitForElementVisible('@accountButton', 15000);
        browser.pause(3000);
        amazonHome.moveToElement('@accountButton', 1, 1);
        amazonHome.waitForElementVisible('@musicLibrary', 15000);
        amazonHome.click('@musicLibrary');
        browser.pause(3000);
    },

    'Verify music': function (browser) {
        const amazonMusic = browser.page.amazonMusicPage();

        amazonMusic.waitForElementVisible('@navBarInput', 15000);
        amazonMusic.click('@navBarInput');
        amazonMusic.setValue('@navBarInput', 'Taylor Swift');
        browser.keys(browser.Keys.ENTER);
        browser.pause(3000);
        // amazonMusic.click('@zipSubmitButton');
        // amazonMusic.waitForElementVisible('@finishButton', 15000);
        // amazonMusic.click('@finishButton');
        // amazonMusic.waitForElementVisible('@mainAppFrame', 15000);
    },
}