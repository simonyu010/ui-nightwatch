module.exports = {
    'Verify user can navigate to AmazonUS by inputting zip code': function (browser) {
        const amazonHome = browser.page.amazonHomePage();

        amazonHome.navigate();
        amazonHome.waitForElementVisible('@locationButton', 15000);
        amazonHome.click('@locationButton');
        amazonHome.waitForElementVisible('@zipInput', 15000);
        amazonHome.setValue('@zipInput', '53186');
        // amazonHome.moveToElement('@zipSubmitButton', 2, 2);
        // browser.doubleClick();
        amazonHome.click('@zipSubmitButton');
        browser.pause(1000);

        browser.element('css selector', '[class="a-size-small,a-text,a-color-tertiary,a-spacing-top-base"]', function(result){
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
        const amazonMusic = browser.page.amazonMusicPage();

        // amazonHome.waitForElementVisible('@accountButton', 15000);
        // amazonHome.expect.element("@accountButton").text.to.contain('Hello, Sign in').before(7*1000);

        browser.waitForElementVisible('[id="nav-xshop"] a:nth-child(10)', 15000);
        amazonHome.moveToElement('@accountButton', 1, 1);
        // browser.pause(3000);
        amazonHome.waitForElementVisible('@musicLibrary', 15000);
        amazonHome.click('@musicLibrary');
        // amazonMusic.waitForElementVisible('@amazonMusicLogo', 15000);
    },

    // 'Verify user can search by artist name': function (browser) {
    //     const amazonMusic = browser.page.amazonMusicPage();

    //     amazonMusic.waitForElementVisible('@navBarInput', 15000);
    //     amazonMusic.click('@navBarInput');
    //     amazonMusic.setValue('@navBarInput', 'Taylor Swift');
    //     browser.keys(browser.Keys.ENTER);
    //     amazonMusic.waitForElementVisible('@searchResults', 15000);
    //     amazonMusic.verify.containsText('@searchResults', 'Taylor Swift')
    // },

    // 'Verify user can search by song name': function (browser) {
    //     const amazonMusic = browser.page.amazonMusicPage();

    //     amazonMusic.waitForElementVisible('@navBarInput', 15000);
    //     amazonMusic.click('@navBarInput');
    //     amazonMusic.clearValue('@navBarInput');
    //     amazonMusic.setValue('@navBarInput', 'fearless');
    //     browser.keys(browser.Keys.ENTER);
    //     amazonMusic.waitForElementVisible('@searchResults', 15000);
    //     amazonMusic.verify.containsText('@searchResults', 'Fearless');
    // }
}