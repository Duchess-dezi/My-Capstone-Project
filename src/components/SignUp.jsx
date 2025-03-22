import React, { useState } from "react";  
import { useNavigate } from "react-router-dom";  
import Navbar from "./Navbar";  
import { Link } from "react-router-dom";  

function SignUp() {  
    const navigate = useNavigate();  

    // State to store form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Handles input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handles form submission
    const handleSubmit = (e) => {  
        e.preventDefault();  

        // Basic validation
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("User Data:", formData);

        // Redirect user to Login page after signup
        navigate("/login");
    };

    return (  
        <>  
            <Navbar />  
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">  
                <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md sm:max-w-lg text-center">  
                    <h1 className="font-Lobster text-3xl text-yellow-900 mb-6">SIGN UP PAGE</h1>  

                   
                    <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">  
                        <div className="w-full">
                            <label htmlFor="name" className="text-yellow-900 font-semibold block text-left">Name:</label>  
                            <input  
                                type="text"  
                                name="name"  
                                placeholder="Write your name"  
                                value={formData.name}  
                                onChange={handleChange}  
                                className="p-3 mt-1 w-full border rounded-md focus:ring focus:ring-yellow-400"  
                            />  
                        </div>

                        <div className="w-full mt-4">
                            <label htmlFor="email" className="text-yellow-900 font-semibold block text-left">Email:</label>  
                            <input  
                                type="email"  
                                name="email"  
                                placeholder="example@mail.com"  
                                value={formData.email}  
                                onChange={handleChange}  
                                className="p-3 mt-1 w-full border rounded-md focus:ring focus:ring-yellow-400"  
                            />  
                        </div>

                        <div className="w-full mt-4">
                            <label htmlFor="password" className="text-yellow-900 font-semibold block text-left">Password:</label>  
                            <input  
                                type="password"  
                                name="password"  
                                placeholder="Password"  
                                value={formData.password}  
                                onChange={handleChange}  
                                className="p-3 mt-1 w-full border rounded-md focus:ring focus:ring-yellow-400"  
                            />  
                        </div>

                        <div className="w-full mt-4">
                            <label htmlFor="confirmPassword" className="text-yellow-900 font-semibold block text-left">Confirm Password:</label>  
                            <input  
                                type="password"  
                                name="confirmPassword"  
                                placeholder="Confirm Password"  
                                value={formData.confirmPassword}  
                                onChange={handleChange}  
                                className="p-3 mt-1 w-full border rounded-md focus:ring focus:ring-yellow-400"  
                            />  
                        </div>

                        {/* Submit Button */}
                        <button  
                            type="submit"  
                            className="bg-red-900 text-yellow-800 text-lg md:text-xl px-6 py-3 shadow-lg rounded-md w-full sm:w-auto mt-6 hover:bg-red-700 transition"
                        >  
                            SIGN UP  
                        </button>  
                    </form>  

                    <p className="mt-4">Already have an account?  
                        <Link to="/login" className="text-red-700 font-bold hover:underline ml-2">Login here</Link>  
                    </p>  
                </div>  
            </div>  
        </>  
    );  
};  

export default SignUp;
