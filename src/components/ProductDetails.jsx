import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const SHOPIFY_ENDPOINT = "https://jmay2x-k1.myshopify.com/api/2023-04/graphql.json";
const SHOPIFY_TOKEN = import.meta.env.VITE_SHOPIFY_TOKEN;

function ProductDetails() {
    const { addToCart } = useCart();
    const location = useLocation();
    const navigate = useNavigate();
    const { productId } = useParams();
    const decodedProductId = decodeURIComponent(productId);
    const [product, setProduct] = useState(location.state?.product || null);
    const [loading, setLoading] = useState(!location.state?.product);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!product) {
            const fetchProduct = async () => {
                try {
                    const response = await fetch(SHOPIFY_ENDPOINT, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN,
                        },
                        body: JSON.stringify({
                            query: `
                query GetProduct($id: ID!) {
                  product(id: $id) {
                    id
                    title
                    description
                    images(first: 1) {
                      edges {
                        node {
                          url
                        }
                      }
                    }
                    variants(first: 1) {
                      edges {
                        node {
                          id
                          price {
                            amount
                          }
                        }
                      }
                    }
                  }
                }
              `,
                            variables: { id: decodedProductId },
                        }),
                    });

                    const data = await response.json();

                    if (data.errors) {
                        console.error("Shopify errors:", data.errors);
                        setError("Failed to load product details.");
                    } else {
                        setProduct(data.data.product);
                    }

                } catch (err) {
                    console.error("Fetch failed:", err);
                    setError("Something went wrong while fetching product.");
                } finally {
                    setLoading(false);
                }
            };

            fetchProduct();
        }
    }, [decodedProductId, product]);

    const handleAddToCart = () => {
        if (!product) return;
      
        const price = product.variants.edges[0]?.node.price.amount;
        const image = product.images.edges[0]?.node.url;
      
        addToCart({
          id: product.id,
          title: product.title,
          price,
          image,
        });
      
        navigate('/cart'); 
      };
      

    if (loading) return <div className="text-center p-6">Loading...</div>;
    if (error) return <div className="text-center text-red-600 p-6">{error}</div>;
    if (!product) return <div className="text-center p-6">Product not found</div>;

    const image = product.images.edges[0]?.node.url || '/placeholder.jpg';
    const price = product.variants.edges[0]?.node.price.amount || "N/A";

    return (
        <div className="flex flex-col justify-center rounded-lg shadow-lg min-h-screen p-4 max-w-xl mx-auto">
            <button
                onClick={() => navigate(-1)}
                className="text-red-500 mb-4 hover:underline"
            >
                &larr; Back to Products
            </button>

            <img
                src={image}
                alt={product.title}
                className="w-full h-64 object-cover rounded"
            />
            <h1 className="text-3xl text-yellow-900 font-bold mt-4">
                {product.title}
            </h1>
            <p className="text-yellow-800 mt-2">{product.description}</p>
            <p className="text-xl font-semibold text-pink-600 mt-4">₦{price}</p>

            <button
                onClick={handleAddToCart}
                className="mt-4 bg-red-900 text-yellow-700 px-4 py-2 rounded hover:bg-pink-500 transition-colors"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductDetails;
