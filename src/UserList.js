import React, { useState, useEffect } from 'react';
import UserCard from './UserCard'; 
const UserList = () => {
  // State to store the user data
  const [users, setUsers] = useState([]);

  // useEffect to fetch data when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Fetch data from the API
        const data = await response.json(); // Convert the response to JSON
        setUsers(data); // Store the fetched data in the state
      } catch (error) {
        console.error("Error fetching data: ", error); // Handle any errors
      }
    };

    fetchData(); // Function Call
  }, []); 


  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
