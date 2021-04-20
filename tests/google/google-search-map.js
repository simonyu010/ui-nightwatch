module.exports = {
    'Navigate to Google homepage': function (browser) {
        browser.url('https://www.google.com/');
        browser.waitForElementVisible('div:nth-child(1) div:nth-child(2) input', 15000);
    },

    'Test Suggestion list fuction': function (browser) {
        browser.click('div:nth-child(1) div:nth-child(2) input');
        browser.setValue('div:nth-child(1) div:nth-child(2) input', 'White House Address');
        browser.waitForElementVisible('li:nth-child(1)>div', 8000);
        browser.pause(1000);
    },

    'Test Map Address': function (browser) {
        browser.keys(browser.Keys.ENTER);
        browser.verify.containsText('[class^="match"] div div:nth-child(1)', '1600 Pennsylvania');
    },

    'Test Navigate Button': function (browser) {
        browser.waitForElementVisible('[style="cursor:pointer"] div', 1500);
        browser.click('[style="cursor:pointer"] div');
        browser.waitForElementNotPresent('[style="cursor:pointer"] div', 15000);
    },

    'Test Navigate Page': function (browser) {
        let address;
        browser.waitForElementVisible('[id="sb_ifc51"] input',15000);
        browser.getText('[id="sb_ifc51"] input', function(result){
            address=result.value;
            console.log('++++++++++++++++++++++++++++++++++++++',address);
        });
        browser.verify.containsText('[id="sb_ifc51"] input','Pennsylvania');
        
    }
}