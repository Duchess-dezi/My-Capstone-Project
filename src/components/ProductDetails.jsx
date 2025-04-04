import React from "react";

 function ProductDetails({ product, onAddToCart, onBack }) {
    const image = product.images.edges[0]?.node.url;
    const price = product.variants.edges[0].node.price.amount;
  
    return (
      <div className="p-4 max-w-xl mx-auto">
        <button onClick={onBack} className="text-blue-500 mb-4">&larr; Back to Products</button>
        <img src={image} alt={product.title} className="w-full h-64 object-cover rounded" />
        <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-xl font-semibold text-pink-600 mt-4">₦{price}</p>
        <button onClick={() => onAddToCart(product)} className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          Add to Cart
        </button>
      </div>
    );
  }
  export default ProductDetails;
  