import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const SHOPIFY_ENDPOINT = "https://jmay2x-k1.myshopify.com/api/2023-04/graphql.json";
const SHOPIFY_TOKEN = import.meta.env.VITE_SHOPIFY_TOKEN;

function ShopList({ onSelectProduct }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(SHOPIFY_ENDPOINT, {
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
    })
      .catch(error => console.error("Fetch error:", error))
      .then(res => res.json())
      .then(data => {
        const formatted = data.data.products.edges.map(edge => edge.node);
        setProducts(formatted);

      });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-6 p-4">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
          <img src={product.images.edges[0]?.node.url} alt={product.title} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl text-yellow-900 font-semibold mt-2">{product.title}</h2>
          <p className="text-yellow-800">{product.description}</p>
          <p className="font-bold text-pink-600 mt-2">₦{product.variants.edges[0].node.price.amount}</p>
          <button onClick={() => navigate(`/products/${product.id}`, { state: { product } })}
           className="mt-3 bg-red-900 text-yellow-800 px-4 py-2 rounded hover:bg-pink-600">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
export default ShopList;
