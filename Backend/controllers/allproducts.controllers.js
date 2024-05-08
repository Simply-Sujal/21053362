const axios = require('axios');

const getProducts = async (req, res) => {
    try {
        const { category } = req.params;
        const { top, minPrice, maxPrice } = req.query;

        // Fetch product data from each company's API
        const companies = ['AMZ', 'COMPANY2', 'COMPANY3', 'COMPANY4', 'COMPANY5'];
        const topProducts = [];

        for (const company of companies) {
            const url = `http://20.244.56.144/test/companies/${company}/categories/${category}/products`
            const response = await axios.get(url, {
                params: {
                    top,
                    minPrice,
                    maxPrice
                }
            });

            // Extract top products from each company's response
            const companyProducts = response.data.products;
            topProducts.push(...companyProducts.slice(0, top));
        }

        res.status(200).json({ topProducts });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getProducts
};