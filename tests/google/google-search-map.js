module.exports = {
    'Navigate to Google homepage': function (browser) {
        browser.url('https://www.google.com/');
        browser.waitForElementVisible('[class="gLFyf gsfi"]', 15000);
    },

    'Test Map Fuction': function(browser) {
        browser.setValue('[class="gLFyf gsfi"]', ['1216 cavalier dr',browser.Keys.ENTER]);
        browser.waitForElementVisible('[id="lu_map"]', 15000);
        browser.pause(2000);
    }
    
}