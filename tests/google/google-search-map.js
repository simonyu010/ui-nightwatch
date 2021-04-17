module.exports = {
    'Navigate to Google homepage': function (browser) {
        browser.url('https://www.google.com/');
        browser.waitForElementVisible('div:nth-child(1) div:nth-child(2) input', 15000);
    },

    'Test Suggestion list fuction': function(browser) {
        browser.setValue('div:nth-child(1) div:nth-child(2) input', '1216 cavalier dr');
        browser.assert.containsText('li:nth-child(1) div:nth-child(1) div:nth-child(1) span','1216');
    },

    'Test Map Fuction': function(browser) {
        browser.clearValue('div:nth-child(1) div:nth-child(2) input');
        browser.setValue('div:nth-child(1) div:nth-child(2) input', ['1216 cavalier dr',browser.Keys.ENTER]);
        browser.waitForElementVisible('[id="lu_map"]', 15000);
    },

    'Test Map Address': function(browser) {
        browser.assert.containsText('[class="desktop-title-content"]','1216' );
    },

    'Test Navigate Button': function(browser){
        browser.click('[class="e5KSyc WGYX8 ckX4df"]');
        browser.waitForElementNotPresent('[class="e5KSyc WGYX8 ckX4df"]',15000);
    },

    'Test Navigate Page': function(browser){
        browser.waitForElementVisible('[id="section-directions-trip-title-0"] span',15000);
        browser.assert.containsText('[id="section-directions-trip-title-0"] span','Cavalier Dr');
    }
    
}