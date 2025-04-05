import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className=" flex flex-col justify-center min-h-screen shadow-lg rounded-lg p-4 max-w-xl mx-auto">
      <h2 className="text-2xl text-yellow-900 font-bold mb-4 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center text-yellow-950 mb-2 border-b pb-2">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-yellow-800">
                    ₦{item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <p className="font-bold mt-4 text-yellow-950">Total: ₦{total.toFixed(2)}</p>
        </>
      )}
    </div>
  );
}
export default Cart;