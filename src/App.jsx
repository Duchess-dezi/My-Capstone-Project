import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ShopList from "./components/ShopList";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import CheckOut from "./components/CheckOut";
import MyAccount from "./components/MyAccount";
import Cart from "./components/Cart";


function App() {
    return (
        <Router>
            <Navbar />
            <div className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shoplist" element={<ShopList />} />
                    <Route path="/productdetails" element={<ProductDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<CheckOut />} />
                    <Route path="/myaccount" element={<MyAccount />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
