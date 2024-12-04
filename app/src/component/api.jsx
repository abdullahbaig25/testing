import React, { useState, useEffect } from "react";

// Predefined dummy data (mocking an API response)
const dummyData = [
  { id: 1, name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
  { id: 2, name: "Bob", email: "bob@example.com", phone: "987-654-3210" },
  { id: 3, name: "Charlie", email: "charlie@example.com", phone: "555-555-5555" },
];

const UserList = () => {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    setTimeout(() => {
      setUsers(dummyData); // Set the predefined dummy data to the state
      setLoading(false); // Stop loading after data is set
    }, 1000); 
  }, []);

  // If loading, display loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
