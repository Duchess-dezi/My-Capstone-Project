import React from "react";

function Navbar() {
    return (
        <>
            <nav className="fixed top-0 right-0 w-full bg-white shadow-md">
                <ul className="flex justify-end space-x-4 text-pink-400 font-bold pr-8 text-xl m-4 p-4">
                    <li className="hover:text-red-600 active:text-red-900">Home</li>
                    <li className="hover:text-red-600 active:text-red-900">Shop</li>
                    <li className="hover:text-red-600 active:text-red-900">Cart</li>
                    <li className="hover:text-red-600 active:text-red-900">CheckOut</li>
                    <li className="hover:text-red-600 active:text-red-900">My Account</li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
