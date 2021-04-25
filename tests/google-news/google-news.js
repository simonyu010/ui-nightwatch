module.exports = {
    'Verify user can navigate to Google homepage by URL': function (browser) {
        browser.url('https://google.com/');
        browser.waitForElementVisible('[height="92"]'); //to-do waitFor this element to prove page load
    },

    'Navigate to google news science from homepage': function (browser) {
        browser.verify.visible('[maxlength="2048"]'); //verify this visible, no need to wait since page already loaded
        browser.setValue('[maxlength="2048"]', 'google news');
        browser.keys(browser.Keys.ENTER);
        browser.waitForElementVisible('[id="rso"] div div div div div div h3', 15000);
        browser.click('[id="rso"] div div div div div div h3');
        // browser.verify.visible('[jsdata="deferred-i3"] div div'); //find a better element, waitFor to prove this page & element loaded
        browser.pause(3000);
    },

    'Verify google news Science button': function (browser) {
        browser.element('css selector', 'header c-wiz div:nth-child(5) div:nth-child(11)', function(result){
            if (!result.value && !result.value.ELEMENT) {
                browser.click('[aria-label="Main menu"] svg');
            }
        });
        browser.waitForElementVisible('header c-wiz div:nth-child(5) div:nth-child(11)');
        browser.click('header c-wiz div:nth-child(5) div:nth-child(11)');
        browser.waitForElementVisible('c-wiz[data-node-index="1;0"] div:nth-child(2) h2');
        browser.verify.containsText('c-wiz[data-node-index="1;0"] div:nth-child(2) h2', 'Science');
    },

    'Verify google new search result': function (browser) {
        browser.waitForElementVisible('[jsaction^="input"]', 15000);
        browser.setValue('[jsaction^="input"]', 'nasa shares photos of lunar gateway space station to launch for moon');
        browser.keys(browser.Keys.ENTER);
        browser.verify.containsText('[data-n-et="406"] div div div h3', 'shares photos');
    }
}