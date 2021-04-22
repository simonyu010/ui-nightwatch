module.exports = {
    url: 'https://www.google.com/',
    elements: {
        searchBar: { selector: 'div:nth-child(1) div:nth-child(2) input' },
        firstSuggestion: { selector: 'li:nth-child(1)>div' },
        searchResults: { selector: '[id="search"]' },
        navigateButton: { selector: '[style="cursor:pointer"] > div:nth-child(1)' },
        destinationInput: { selector: '[id="directions-searchbox-1"] input' },
    }
}