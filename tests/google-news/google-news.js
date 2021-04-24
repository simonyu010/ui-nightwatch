module.exports = {
    'Verify user can navigate to Google homepage by URL': function (browser) {
        browser.url('https://google.com/');
        browser.verify.visible('[height="92"]');
    },

    'Navigate to google news science from homepage': function (browser) {
        browser.waitForElementVisible('[maxlength="2048"]');
        browser.setValue('[maxlength="2048"]', 'google news');
        browser.keys(browser.Keys.ENTER);
        browser.waitForElementVisible('[id="rso"] div div div div div div h3', 15000);
        browser.click('[id="rso"] div div div div div div h3');
        browser.verify.visible('[jsdata="deferred-i3"] div div');

        'Verify google news Science button'
        browser.waitForElementVisible('header c-wiz div:nth-child(10)');
        browser.click('header c-wiz div:nth-child(10)');
        // browser.verify.visble('[class="OJMBqe"]');

        'Verify google new search result'
        browser.waitForElementVisible('[jsaction^="input"]',15000);
        browser.setValue('[jsaction^="input"]', 'nasa shares photos of lunar gateway space station to launch for moon');
        browser.keys(browser.Keys.ENTER);
        browser.verify.containsText('[data-n-et="406"] div div div h3', 'shares photos');
    }
}