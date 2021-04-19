module.exports = {
    'Navigate to Google homepage': function (browser) {
        browser.url('https://www.google.com/');
        browser.waitForElementVisible('div:nth-child(1) div:nth-child(2) input', 15000);
    },

    'Test Suggestion list fuction': function (browser) {
        let firstLineText;
        browser.click('div:nth-child(1) div:nth-child(2) input');
        browser.clearValue('div:nth-child(1) div:nth-child(2) input');
        browser.setValue('div:nth-child(1) div:nth-child(2) input', '妈的什么鬼');
        browser.waitForElementVisible('li:nth-child(1) div:nth-child(1) div:nth-child(1) span', 8000);
        browser.getText('li:nth-child(1) div:nth-child(1) div:nth-child(1) span', function(result){
            firstLineText = result.value;
            console.log('++++++++++++++++++++', firstLineText);
        })
        browser.assert.containsText('li:nth-child(1) div:nth-child(1) div:nth-child(1) span', '1216');
        // browser.keys(browser.Keys.ENTER);
        // browser.pause(5000);
    },

    'Test Map Fuction': function (browser) {
        browser.clearValue('div:nth-child(1) div:nth-child(2) input');
        browser.setValue('div:nth-child(1) div:nth-child(2) input', ['1216 cavalier dr', browser.Keys.ENTER]);
        browser.waitForElementVisible('[id="lu_map"]', 15000);
    },

    'Test Map Address': function (browser) {
        browser.assert.containsText('[class="desktop-title-content"]', '1216');
    },

    'Test Navigate Button': function(browser){
        //add assertion before click
        browser.click('[class="e5KSyc WGYX8 ckX4df"]');
        //find a better element
        browser.waitForElementNotPresent('[class="e5KSyc WGYX8 ckX4df"]',15000);
    },

    'Test Navigate Page': function(browser){
        //pick a different element rather than a dynamic element
        // browser.waitForElementVisible('[id="section-directions-trip-title-0"] span',15000);
        // browser.assert.containsText('[id="section-directions-trip-title-0"] span','Cavalier Dr');
    }

}