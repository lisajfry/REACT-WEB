import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './User.css';

function Home() {
  const containerStyle = {
    backgroundColor: "#f9edf7"
  };

  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const userData = await axios.get('http://localhost:8080/user');
    setUser(userData.data);
  }

  const deleteUser = async (Id) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus pengguna?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/delete/user/${Id}`);
      getUser();
    }
  }

  const handleAddUser = () => {
    navigate('/pelayanan/user/AddUser');
  }

  const handleEditUser = (Id) => {
    navigate(`/pelayanan/user/EditUser/${Id}`);
  }

  return (
    <div style={containerStyle}>
      <button onClick={handleAddUser} className='custom-button'>Tambah Data</button>
      <div className="container mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Pelayanan</th>
              <th scope="col">Keterangan</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((data, index) => (
              <tr key={index}>
                <td>{data.username}</td>
                <td>{data.pelayanan}</td>
                <td>{data.keterangan}</td>
                <td>
                  <button onClick={() => handleEditUser(data.Id)}>Edit</button>
                  <button onClick={() => deleteUser(data.Id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
