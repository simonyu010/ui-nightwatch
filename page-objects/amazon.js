module.exports = {
    url: 'https://www.amazon.com/',
    elements: {
        mainAppFrame: { selector: '[id="gw-desktop-herotator"]'},
        searchBar: { selector: '[id="twotabsearchtextbox"]'},
        bookName: {selector:'[class$="base a-text-normal"]'},
        addToCart:{selector:'[id="add-to-cart-button"]'},
        viewCart:{selector:'[id="hlb-view-cart-announce"]'},
        DeleteFromCart:{selector:'[value="Delete"]'},
    }

}
