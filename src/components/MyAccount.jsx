import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MyAccount() {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("You’ve been logged out.");
    navigate("/");
  };

  if (!user) {
    return <p className="text-center mt-10">No user info found. Please log in.</p>;
  }

  return (
    <div className="flex flex-col justify-center text-center p-6 max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl text-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        className="rounded-full h-32 w-32 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
        alt="User"
      />
      <h1 className="text-xl text-yellow-950 my-4 hover:text-yellow-700">
        {user.name}
      </h1>
      <p className="text-yellow-800">Dear {user.name}, We at Dezi's Special hope to sweeten your taste buds with exquisite treats, anyday! anytime!!.</p>
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-700 text-yellow-800 px-4 py-2 rounded hover:bg-red-800"
      >
        Log Out
      </button>
    </div>
  );
}

export default MyAccount;
