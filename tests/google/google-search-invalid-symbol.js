module.exports = {
    'Navigate to Google homepage': function (browser) {
        browser.url('https://www.google.com/');
        browser.waitForElementVisible('div:nth-child(1) div:nth-child(2) input', 15000);
    },

    'Search for invalid symbol': function(browser) {
        browser.setValue('div:nth-child(1) div:nth-child(2) input', ['!@#$%^&*()_+><',browser.Keys.ENTER]);
        browser.pause(2000);
    }
}