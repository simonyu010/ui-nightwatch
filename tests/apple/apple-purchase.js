module.exports = {
    'Navigate to Apple Homepage in U.S': function (browser) {
        const appleHome = browser.page.appleHomePage();

        appleHome.navigate();
        appleHome.waitForElementVisible('@landIndicator');

        browser.element('css selector', '[id="ac-ls-continue"]', function(result){
            if (result.value && result.value.ELEMENT) {
                appleHome.click('@regionContinue');
                appleHome.waitForElementVisible('@appleUsIndicator');
            } else {
                appleHome.verify.visible('@appleUsIndicator')
            }
        });

    }
}