
function sortProducts(products, sortBy) {
    let availableProducts = products.filter(product => product.availability === 'yes');

    availableProducts.sort((a, b) => {
        if (sortBy === 'price') {
            return a.price - b.price;
        } else if (sortBy === 'rating') {
            return a.rating - b.rating;
        } else if (sortBy === 'discount') {
            return a.discount - b.discount;
        }
    });
}

