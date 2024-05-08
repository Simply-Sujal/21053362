import React, { useState, useEffect } from 'react';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4 text-center pt-5">All Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((item) => (
                    <div key={item.id} className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
                        <div className="md:flex flex-col">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:w-48 mx-auto" src={item.image} alt="Product Image" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.category}</div>
                                <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                                <p className="mt-2 text-gray-500">{item.description}</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className="text-gray-600 mr-2">Price: ${item.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListPage;
