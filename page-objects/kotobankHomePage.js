module.exports = {
    url: 'https://kotobank.jp/',
    elements: {
        topLogo: { selector: '[id="toplogo"]'},
        searchBar: { selector: '[id="search_input"]'},
        submitButton: {selector: '[type="submit"]'},
        topicPath: {selector: '[id="topicPath"] > li:nth-child(2)'},
        sponsorButton: {selector: '[id="sponsor"] img'}
    }
}