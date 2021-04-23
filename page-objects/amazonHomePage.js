module.exports = {
    url: 'https://www.amazon.com/',
    elements: {
        mainAppFrame: { selector: '[id="gw-desktop-herotator"]' },
        accountButton: { selector: '[id="nav-link-accountList-nav-line-1"]' },
        locationButton: { selector: '[id="nav-global-location-popover-link"] div:nth-child(1)' },
        zipInput: { selector: '[id="GLUXZipInputSection"] div:nth-child(1) input' },
        zipSubmitButton: { selector: '[id="GLUXZipInputSection"] div:nth-child(2) input' },
        finishButton: { selector: '[class="a-popover-footer"] span:nth-child(1) input' },
        musicLibrary: { selector: '[id="nav-al-your-account"] a:nth-child(14)' },
        robotMopImage: { selector: '[alt="Smart gifts for Mom"]' }
    }
}