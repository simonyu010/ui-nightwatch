module.exports = {
    'Navigate to Google homepage': function (browser) {
        browser.url('https://www.google.com/');
        browser.waitForElementVisible('[class="gLFyf gsfi"]', 15000);
    },

    'Verify if Auto-completing function recognize Chinese': function(browser) {
        // browser.setValue('[class="gLFyf gsfi"]', ['中文にほんご조선‎Ngônअफ़्रीका की',browser.Keys.ENTER]);
        browser.setValue('[class="gLFyf gsfi"]', '中文');
        browser.waitForElementVisible('[role="listbox"] li:nth-child(1)');
        browser.verify.containsText('[role="listbox"] li:nth-child(1)', 'IAJdi');
        browser.pause(2000);
    },

    'Verify if Auto-completing function recognize English': function(browser) {
        // browser.setValue('[class="gLFyf gsfi"]', ['中文にほんご조선‎Ngônअफ़्रीका की',browser.Keys.ENTER]);
        browser.clearValue('[class="gLFyf gsfi"]');
        browser.setValue('[class="gLFyf gsfi"]', 'にほんご');
        browser.waitForElementVisible('[role="listbox"] li:nth-child(1)');
        browser.expect.element('[role="listbox"] li:nth-child(1)').text.to.contain('日本語');
        browser.pause(2000);
    }
}