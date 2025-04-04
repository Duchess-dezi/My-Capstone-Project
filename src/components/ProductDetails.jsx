import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from 'react-router-dom';

function ProductDetails() {
  const location = useLocation();
  const { productId } = useParams();
  const navigate = useNavigate();
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
                          price {
                            amount
                          }
                        }
                      }
                    }
                  }
                }
              `,
              variables: { id: productId }
            })
          });

          const data = await response.json();
          setProduct(data.data.product);
        } catch (err) {
          setError("Failed to load product");
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [productId, product]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  const image = product.images.edges[0]?.node.url || '/placeholder.jpg';
  const price = product.variants.edges[0]?.node.price.amount || "N/A";

  return (
    <div className="p-4 max-w-xl mx-auto">
      <button 
        onClick={() => navigate(-1)}
        className="text-blue-500 mb-4 hover:underline"
      >
        &larr; Back to Products
      </button>
      
      <img src={image} alt={product.title} className="w-full h-64 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-xl font-semibold text-pink-600 mt-4">₦{price}</p>
      
      <button 
        onClick={() => {}} 
        className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;