module.exports = {
    'Navigate to Google homepage': function (browser) {
        browser.url('https://www.google.com/');
        browser.waitForElementVisible('[class="gLFyf gsfi"]', 15000);
    },

    'different lanuage input': function(browser) {
        browser.setValue('[class="gLFyf gsfi"]', ['中文にほんご조선‎Ngônअफ़्रीका की',browser.Keys.ENTER]),
        browser.pause(2000);
    }
    
}