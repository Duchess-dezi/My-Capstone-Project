import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation


const HomePage = () => {
    const navigate = useNavigate(); // Initialize navigation function

    return (

        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
            
            {/* Text Container */}
            <div className="max-w-3xl bg-white shadow-lg text-center text-yellow-900 p-10 rounded-lg">
                <p className="font-Oswald text-3xl md:text-5xl font-bold leading-snug cursor-pointer">
                    WELCOME TO DEZI'S SPECIAL, WHERE WE BRING THE TASTE TO EVERY BITE,<br />
                    WHAT'S YOUR PLEASURE FOR TODAY!!
                </p>
            </div>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center mt-6 w-full sm:w-auto">
                <button
                    onClick={() => navigate("/login")}
                    className="bg-red-900 text-yellow-800 text-lg md:text-2xl px-10 py-4 shadow-lg rounded-lg w-full sm:w-auto hover:bg-red-200"
                >
                    LOGIN
                </button>

                <button
                    onClick={() => navigate("/signup")}
                    className="bg-red-900 text-yellow-800 text-lg md:text-2xl px-10 py-4 shadow-lg rounded-lg w-full sm:w-auto hover:bg-red-200"
                >
                    SIGN UP
                </button>
            </div>
        </div>
    );
};

export default HomePage;
