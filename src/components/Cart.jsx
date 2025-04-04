import React from 'react'

function Cart({ cartItems, onCheckout, onRemoveItem }) {
  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={item.id} className="flex justify-between items-center mb-2 border-b pb-2">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">₦{item.price}</p>
              </div>
              <button
                onClick={() => onRemoveItem(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <p className="font-bold mt-4">Total: ₦{total.toFixed(2)}</p>
          <button onClick={onCheckout} className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;