import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { RiShoppingBag4Line } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa"; 

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                
                <Link to="/">
                    <img src="/images/dspecial1.png" alt="Logo" className="w-20 h-20 rounded-xl shadow-md" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-pink-400 font-bold text-lg">
                    <li>
                        <Link to="/" className="flex items-center gap-2 hover:text-red-600 active:text-red-900 cursor-pointer">
                            <FaHouse /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/shoplist" className="flex items-center gap-2 hover:text-red-600 active:text-red-900 cursor-pointer">
                            <RiShoppingBag4Line /> Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="flex items-center gap-2 hover:text-red-600 active:text-red-900 cursor-pointer">
                            <GiShoppingCart /> Cart
                        </Link>
                    </li>
                    <li>
                        <Link to="/checkout" className="flex items-center gap-2 hover:text-red-600 active:text-red-900 cursor-pointer">
                            <HiOutlineBadgeCheck /> Checkout
                        </Link>
                    </li>
                    <li>
                        <Link to="/myaccount" className="flex items-center gap-2 hover:text-red-600 active:text-red-900 cursor-pointer">
                            <MdAccountCircle /> My Account
                        </Link>
                    </li>
                </ul>

                <button
                    className="md:hidden text-pink-400 text-3xl focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {/* mobile menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col items-center space-y-4 text-pink-400 font-bold text-lg py-4 bg-white shadow-lg">
                    <li>
                        <Link to="/" className="hover:text-red-600 active:text-red-900 cursor-pointer" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/shoplist" className="hover:text-red-600 active:text-red-900 cursor-pointer" onClick={() => setIsOpen(false)}>Shop</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="hover:text-red-600 active:text-red-900 cursor-pointer" onClick={() => setIsOpen(false)}>Cart</Link>
                    </li>
                    <li>
                        <Link to="/checkout" className="hover:text-red-600 active:text-red-900 cursor-pointer" onClick={() => setIsOpen(false)}>Checkout</Link>
                    </li>
                    <li>
                        <Link to="/myaccount" className="hover:text-red-600 active:text-red-900 cursor-pointer" onClick={() => setIsOpen(false)}>My Account</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
