module.exports = {
    url: 'https://www.amazon.com/',
    elements: {
        mainAppFrame: { selector: '[id="gw-desktop-herotator"]'},
        searchBar: { selector: '[id="twotabsearchtextbox"]'},
        bookName10: {selector:'[cel_widget_id="MAIN-SEARCH_RESULTS-1"] div:nth-child(3) h2 span'},
        bookName13:{selector:'[cel_widget_id="MAIN-SEARCH_RESULTS-2"] div:nth-child(3) h2 span'},
        addToCart:{selector:'[id="add-to-cart-button"]'},
        viewCart:{selector:'[id="hlb-view-cart-announce"]'},
        DeleteFromCart:{selector:'[value="Delete"]'},
    }
    
}
