import React from 'react'

function MyAccount() {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Account Details</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  )
}

export default MyAccount;