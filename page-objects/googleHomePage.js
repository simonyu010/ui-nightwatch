module.exports = {
    url: 'https://www.google.com/',
    elements: {
        searchBar: { selector: 'div:nth-child(1) div:nth-child(2) input' },
        firstSuggestion: { selector: 'li:nth-child(1)>div' },
        searchResults: { selector: '[id="search"]' },
        mapPicture: { selector: '[id="dimg_16"]' },
        fullPicture: { selector: '[id="rcnt"]' }
    }
}