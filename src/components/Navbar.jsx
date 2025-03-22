import React, { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                {/* Logo */}
                <img src="/images/dspecial1.png" alt="Logo" className="w-20 h-20 rounded-xl shadow-md" />

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-pink-400 font-bold text-lg">
                    <li className="hover:text-red-600 active:text-red-900 cursor-pointer">Home</li>
                    <li className="hover:text-red-600 active:text-red-900 cursor-pointer">Shop</li>
                    <li className="hover:text-red-600 active:text-red-900 cursor-pointer">Cart</li>
                    <li className="hover:text-red-600 active:text-red-900 cursor-pointer">CheckOut</li>
                    <li className="hover:text-red-600 active:text-red-900 cursor-pointer">My Account</li>
                </ul>

                {/* Mobile Menu Button (Hamburger Icon) */}
                <button 
                    className="md:hidden text-pink-400 text-3xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu (Toggles Open/Close) */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center space-y-4 text-pink-400 font-bold text-lg py-4 bg-white shadow-lg">
                    <li className="hover:text-red-600 active:text-red-900 cursor-pointer">Home</li>
                    <li className="hover:text-red-600 active:text-red-900 cursor-pointer">Shop</li>
                    <li className="hover:text-red-600 active:text-red-900 cursor-pointer">Cart</li>
                    <li className="hover:text-red-600 active:text-red-900 cursor-pointer">CheckOut</li>
                    <li className="hover:text-red-600 active:text-red-900 cursor-pointer">My Account</li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
