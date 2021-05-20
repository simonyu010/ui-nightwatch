module.exports = {
    url: 'https://www.google.com/',
    elements: {
        searchBar: { selector: '[maxlength="2048"]' },
        firstSuggestion: { selector: 'li:nth-child(1)>div' },
        searchResults: { selector: '[id="search"]' },
        directionsButton: { selector: '[style="cursor:pointer"] > div:nth-child(1)' },
        destinationInput: { selector: '[id="directions-searchbox-1"] input' },
        logoPicture: { selector: '[alt="Google"]' },
    }
}