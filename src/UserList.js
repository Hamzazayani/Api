import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        setListOfUsers(response.data);
      })
      .catch(function (error) {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>User List</h1>
      <ul>
        {listOfUsers&&listOfUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

