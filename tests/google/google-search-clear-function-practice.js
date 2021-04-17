module.exports = {
    'Navigate to Google homepage': function (browser) {
        browser.url('https://www.google.com/');
        browser.waitForElementVisible('[class="gLFyf gsfi"]', 15000);
    },

    'Search for invalid symbol': function(browser) {
        browser.setValue('[class="gLFyf gsfi" ]', ['khdsfgkjdsahfkj']);
        browser.pause(2000);
        browser.clearValue('[class="gLFyf gsfi" ]');
        browser.pause(2000);
        browser.setValue('[class="gLFyf gsfi" ]', ['dfgaskdjhkjl']);
        browser.pause(5000);
    }
}