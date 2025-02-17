import React, { useEffect, useState } from 'react'
import API from '../api/axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [editUserId, setEditUserId] = useState(null);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
    password: '',
    address: '',
    contact_no: ''
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get('/userlist');
        setUsers(response.data);
      } catch (error) {
        setError('Failed to fetch users');
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    console.log(`triggered- ${user._id}`);
    setEditUserId(user._id);
    setFormData(user);
  };

  const handleDelete = (id) => {
    try {
      const confirmed = window.confirm('Are you sure you want to remove this user?');
      if(confirmed) {
        API.delete(`/userlist/${id}`);
        setUsers(users.filter(user => user._id !== id));
        alert('User deleted successfully');
      } 
    } catch (error) {
      setError('Failed to delete user');
      console.error(error);
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditSave = async () => {
    try {
      const response = await API.put(`/userlist/${editUserId}`, formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      setUsers(users.map((user)=> (user._id === editUserId ? response.data.user : user)));
      setEditUserId(null);
      setError(null);
      alert('User updated successfully');
    } catch (error) {
     setError('Failed to update user');
     console.error(error);
    }
  };

  return (
    <>
      <h1>User List</h1>
      <button className="btnAddUser"><a href="/signup">Add User</a></button>

      {error && <p>{error}</p>}

      <table id="userTable" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Address</th>
            <th scope="col">Contact No</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody id="userList">
          {
            users.map((user, index) => (
              <tr key={user._id || index}>
                <td>
                  {editUserId === user._id ? (
                    <input type="text" name='first_name' value={formData.first_name} onChange={handleEditChange} />
                  ) : (user.first_name)}
                </td>
                <td>
                  {editUserId === user._id ? (
                    <input type="text" name='last_name' value={formData.last_name} onChange={handleEditChange} />
                  ) : (user.last_name)}
                </td>
                <td>
                  {editUserId === user._id ? (
                    <input type="text" name='user_name' value={formData.user_name} onChange={handleEditChange} disabled />
                  ) : (user.user_name)}
                </td>
                <td>
                  {editUserId === user._id ? (
                    <input type="email" name='email' value={formData.email} onChange={handleEditChange} disabled />
                  ) : (user.email)}
                </td>
                <td>
                  {editUserId === user._id ? (
                    <input type="password" name='password' value={formData.password} onChange={handleEditChange} disabled />
                  ) : (user.password)}
                </td>
                <td>
                  {editUserId === user._id ? (
                    <input type="text" name='address' value={formData.address} onChange={handleEditChange} />
                  ) : (user.address)}
                </td>
                <td>
                  {editUserId === user._id ? (
                    <input type="text" name='contact_no' value={formData.contact_no} onChange={handleEditChange} />
                  ) : (user.contact_no)}
                </td>
                <td>
                  {user.user_role}
                </td>
                <td>
                  {editUserId === user._id ? (
                    <button className='btnSave' onClick={handleEditSave}>Save</button>
                  ) : (
                    <button onClick={() => handleEdit(user)}>Edit</button>
                  )}
                  <button className='btnDel' onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default UserList