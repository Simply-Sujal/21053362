import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProduct();
    }, [id]);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4 text-center pt-5">Product Details</h1>
            {product ? (
                <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
                    <div className="md:flex flex-col">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48 mx-auto" src={product.image} alt="Product Image" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.category}</div>
                            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
                            <p className="mt-2 text-gray-500">{product.description}</p>
                            <div className="mt-4 flex items-center justify-between">
                                <div className="flex items-center">
                                    <span className="text-gray-600 mr-2">Price: ${product.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDetailPage;
