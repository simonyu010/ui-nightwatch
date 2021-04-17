module.exports = {
    'Navigate to Google homepage': function (browser) {
        browser.url('https://www.google.com/');
        browser.waitForElementVisible('div:nth-child(1) div:nth-child(2) input', 15000);
    },

    'Search for invalid symbol': function(browser) {
        browser.setValue('div:nth-child(1) div:nth-child(2) input', 'khdsfgkjdsahfkj');
        browser.pause(1000);
        browser.clearValue('div:nth-child(1) div:nth-child(2) input');
        browser.pause(1000);
        browser.setValue('div:nth-child(1) div:nth-child(2) input', ['dfgaskdjhkjl', browser.Keys.ENTER]);
        browser.pause(2000); 
    }
}