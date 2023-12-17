import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './EditUser.css';

const fetchUser = async (Id, setUsername, setPelayanan, setKeterangan, setOriginalData) => {
  const response = await axios.get(`http://localhost:8080/user/${Id}`);
  const user = response.data;

  setUsername(user.username);
  setPelayanan(user.pelayanan);
  setKeterangan(user.keterangan);
  setOriginalData(user); 
};

const updateUser = async (event, Id, username, pelayanan, keterangan, setLoading, setError, navigate) => {
  event.preventDefault();
  setLoading(true);

  try {
    const putData = await axios.put(
      `http://localhost:8080/edit/user/${Id}`,
      {
        username: username,
        pelayanan: pelayanan,
        keterangan: keterangan
      }
    );

    alert(putData.data.messages);
    navigate('/pelayanan/user');
  } catch (error) {
    setError("Data Gagal diubah. Silakan coba lagi.");
  } finally {
    setLoading(false);
  }
};

const Update = () => {
  const { Id } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [pelayanan, setPelayanan] = useState("");
  const [keterangan, setKeterangan] = useState("");
  
  // eslint-disable-next-line
const [originalData, setOriginalData] = useState(null); // State untuk menyimpan data awal

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser(Id, setUsername, setPelayanan, setKeterangan, setOriginalData);
  }, [Id]);

  return (
    <div className="update-form">
      <div className="modal">
        <div className="modal-header">
          <h2>Form Update Data</h2>
        </div>
        <div className="modal-body">
          <form onSubmit={(event) => updateUser(event, Id, username, pelayanan, keterangan, setLoading, setError, navigate)}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>

            <div className="form-group">
              <label>Pelayanan</label>
              <input
                type="text"
                onChange={(e) => setPelayanan(e.target.value)}
                value={pelayanan}
              />
            </div>

            <div className="form-group">
              <label>Keterangan</label>
              <select
                onChange={(e) => setKeterangan(e.target.value)}
                value={keterangan}
              >
                <option>Pilih status pembayaran...</option>
                <option value="sudah bayar">Sudah Bayar</option>
                <option value="belum bayar">Belum Bayar</option>
              </select>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? 'Updating...' : 'Update'}
            </button>
            {error && <p className="text-danger">{error}</p>}
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={() => navigate(-1)} disabled={loading}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
