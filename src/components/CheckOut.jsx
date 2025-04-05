import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CheckOut() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "card",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      alert("Please fill all required fields.");
      return;
    }
 alert("Order placed successfully!");
    navigate("/"); 
  };

  return (
    <div className="flex flex-col justify-center max-w-3xl mx-auto p-4 text-yellow-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>{item.title} x {item.quantity}</span>
            <span>₦{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <p className="font-bold mt-2 text-yellow-950">Total: ₦{total.toFixed(2)}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          value={form.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <select
          name="paymentMethod"
          value={form.paymentMethod}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="card">Card</option>
          <option value="transfer">Bank Transfer</option>
          <option value="cod">Cash on Delivery</option>
        </select>

        <button
          type="submit"
          className="w-full bg-red-900 text-yellow-800 p-3 rounded hover:bg-red-300"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default CheckOut;
