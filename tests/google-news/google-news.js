module.exports = {
    'Verify user can navigate to Google homepage by URL': function (browser) {
        browser.url('https://news.google.com/topstories?hl=en-US&gl=US&ceid=US:en');
        browser.waitForElementVisible('[class="OHST9e"]', 15000);
    },

    'Navigate to google news science': function (browser) {
        browser.verify.visible('[jsname="V2bVMb"] div:nth-child(11) div:nth-child(2)');
        browser.click('[jsname="V2bVMb"] div:nth-child(11) div:nth-child(2)');
        browser.verify.visible('[class="Ax4B8 ZAGvjd"]');
        browser.click('[class="Ax4B8 ZAGvjd"]');
        
    'Verify google news search result'
        browser.verify.visible('[class="Ax4B8 ZAGvjd"]');
        browser.setValue('[class="Ax4B8 ZAGvjd"]', 'nasa shares photos of lunar gateway space station to launch for moon');
        browser.verify.containsText();
        browser.pause(4000);
    }
}