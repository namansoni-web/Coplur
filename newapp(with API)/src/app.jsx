import React, { useState, useEffect } from 'react';

const API_BASE = 'https://localhost:5001'; // Update this if your backend is hosted elsewhere

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ id: '', name: '', data: '' });
  const [userId, setUserId] = useState('');

  // Fetch all users
  const getAllUsers = async () => {
    const res = await fetch(`${'https://localhost:7198/Home/Users'}/Home/Users`);
    const data = await res.text(); // or res.json() if your backend returns JSON
    setUsers([data]);
  };

  // Get user by ID
  const getUserById = async () => {
    const res = await fetch(`${'https://localhost:7198/Home/Users/get?id=123'}/Home/Users/get?id=${userId}`);
    const data = await res.text();
    alert(data);
  };

  // Add a user
  const addUser = async () => {
    const res = await fetch(`${{
  "id": 455,
  "name": "string",
  "data": "string"
}}/Home/Users/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await res.text();
    alert(data);
  };

  // Update a user
  const updateUser = async () => {
    const res = await fetch(`${'https://localhost:7198/Home/Users/update?id=1234'}/Home/Users/update?id=${user.id}`, {
      method: 'PUT',
    });
    const data = await res.text();
    alert(data);
  };

  // Delete a user
  const deleteUser = async () => {
    const res = await fetch(`${'https://localhost:7198/Home/Users/delete?id=123'}/Home/Users/delete?id=${userId}`, {
      method: 'DELETE',
    });
    const data = await res.text();
    alert(data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Manager</h1>

      <h3>Add/Update User</h3>
      <input
        placeholder="ID"
        value={user.id}
        onChange={(e) => setUser({ ...user, id: e.target.value })}
      />
      <input
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        placeholder="Data"
        value={user.data}
        onChange={(e) => setUser({ ...user, data: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>
      <button onClick={updateUser}>Update User</button>

      <h3>Get/Delete User By ID</h3>
      <input
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={getUserById}>Get User</button>
      <button onClick={deleteUser}>Delete User</button>

      <h3>All Users</h3>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}

export default App;
