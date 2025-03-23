import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    if (storedUser.email === loginData.email && storedUser.password === loginData.password) {
      alert("Login successful!");
      navigate("/productList"); 
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      

      <div className="flex justify-center items-center min-h-screen bg-pink-100 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md sm:max-w-lg text-center">
          <h1 className="font-Lobster text-3xl text-yellow-900 mb-6 transition-transform duration-300 hover:scale-110 cursor-pointer">
            LOGIN
          </h1>
          
          <div className="flex justify-center">
            <img
              src="/images/cococroissant.jpg"
              alt="display-photo"
              className="w-40 h-40 rounded-full shadow-lg m-4 transition-transform duration-300 hover:scale-110"
            />
          </div>

       
          <form onSubmit={handleLogin} className="flex flex-col space-y-4 w-full">
            
            <div className="flex items-center space-x-4">
              <label htmlFor="email" className="text-yellow-900 font-semibold w-1/4 text-right">
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                value={loginData.email}
                onChange={handleChange}
                className="p-3 w-3/4 border rounded-md focus:ring focus:ring-yellow-400"
              />
            </div>

         
            <div className="flex items-center space-x-4">
              <label htmlFor="password" className="text-yellow-900 font-semibold w-1/4 text-right">
                Password:
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleChange}
                className="p-3 w-3/4 border rounded-md focus:ring focus:ring-yellow-400"
              />
            </div>

          
            <button
              type="submit"
              className="bg-red-900 text-yellow-800 text-lg px-6 py-3 shadow-lg rounded-md w-full hover:bg-red-700 transition">
              LOGIN
            </button>
          </form>

          <p className="mt-4">
            Don't have an account?
            <Link to="/signup" className="text-red-700 font-bold hover:underline ml-2">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
