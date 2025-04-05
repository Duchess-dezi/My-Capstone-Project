import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SHOPIFY_ENDPOINT = "https://jmay2x-k1.myshopify.com/api/2023-04/graphql.json";
const SHOPIFY_TOKEN = import.meta.env.VITE_SHOPIFY_TOKEN;

function ShopList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(SHOPIFY_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN,
          },
          body: JSON.stringify({
            query: `
              {
                products(first: 10) {
                  edges {
                    node {
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
                }
              }
            `
          }),
        });

        const data = await response.json();

        if (data.errors) {
          console.error("Shopify Errors:", data.errors);
          setError("Failed to fetch products");
          return;
        }

        const formatted = data.data.products.edges.map(edge => edge.node);
        setProducts(formatted);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Something went wrong while fetching products.");
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div className="text-center text-red-600 p-4">{error}</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map(product => {
        const image = product.images.edges[0]?.node.url || "/placeholder.jpg";
        const price = product.variants.edges[0]?.node.price.amount || "N/A";

        return (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={image}
              alt={product.title}
              className="w-50 h-48 object-cover rounded-md"
            />
            <h2 className="text-xl text-yellow-900 font-semibold mt-2">{product.title}</h2>
            <p className="text-yellow-800 text-sm">{product.description}</p>
            <p className="font-bold text-pink-600 mt-2">₦{price}</p>
            <button
              onClick={() =>
                navigate(`/products/${encodeURIComponent(product.id)}`, {
                  state: { product },
                })
              }
              className="mt-3 bg-red-900 text-yellow-100 px-4 py-2 rounded hover:bg-pink-600"
            >
              View Details
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ShopList;
