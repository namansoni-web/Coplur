import './App.css';
import axios from 'axios';

function App() {
  const getAllUsers = async () => {
    const res = await axios.get('http://localhost:5253/users');
    console.log("All Users:", res.data);
  };

  const getUserById = async () => {
    const res = await axios.get('http://localhost:5253/users/get?id=1234', {
      params: { id: 12 }
    });
    console.log("User By ID:", res.data);
  };

  const addUser = async () => {
    const newUser = {
      id: 1,
      name: "Naman",
      data: "Sample Data"
    };

    const res = await axios.post('http://localhost:5253/users/add', newUser);
    console.log("Add User:", res.data);
  };

  const deleteUser = async () => {
    const res = await axios.delete('http://localhost:5253/users/delete?id=1111', {
      params: { id: 1 }
    });
    console.log("Delete User:", res.data);
  };

  const updateUser = async () => {
    const res = await axios.put('http://localhost:5253/user/update?id=2255', null, {
      params: { id: 22 }
    });
    console.log("Update User:", res.data);
  };

  return (
    <div className="MyApp" style={{ textAlign: 'center', marginTop: '15px' }}>
      <h2>USER DATA</h2>
      <div style={{ marginTop: '15px' }}>
        <button type="button" style={btnStyle} onClick={getAllUsers}>Get All Users</button>
        <button type="button" style={btnStyle} onClick={getUserById}>Get User By ID</button>
        <button type="button" style={btnStyle} onClick={addUser}>Add User</button>
        <button type="button" style={btnStyle} onClick={deleteUser}>Delete User</button>
        <button type="button" style={btnStyle} onClick={updateUser}>Update User</button>
      </div>
    </div>
  );
}


const btnStyle = {
  backgroundColor: '#1e1e2f',
  color: '#00ffe1',
  fontFamily: 'Courier New, monospace',
  fontSize: '14px',
  borderRadius: '12px',
  padding: '12px',
  margin: '10px 0',
  border: '2px solid #00ffe1',
  boxShadow: '0 0 8px #00ffe1',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  width: '100%',
  textAlign: 'center',
};
export default App;