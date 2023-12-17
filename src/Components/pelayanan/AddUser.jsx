import React, { useState } from 'react';
import axios from 'axios';
import './Add.css';

const StatusBayar = Object.freeze({
  SUDAH_BAYAR: 'sudah bayar',
  BELUM_BAYAR: 'belum bayar'
});

const Add = () => {
  const [username, setUsername] = useState('');
  const [pelayanan, setPelayanan] = useState('');
  const [keterangan, setKeterangan] = useState('');

  const handlesSubmit = async (e) => {
    if (username === "" || pelayanan === "" || keterangan === "") {
      alert('Terjadi Kesalahan, Silahkan Coba Lagi!');
    } else {
      try {
        e.preventDefault();
        await axios.post('http://localhost:8080/add/user', {
          username: username,
          pelayanan: pelayanan,
          keterangan: keterangan
        });
        window.location.href = '/pelayanan/user';
        
        alert('Berhasil Ditambahkan!');
      } catch (error) {
        alert('Terjadi Kesalahan, Silahkan Coba Lagi!');
        console.error('Error adding pelayanan:', error);
      }
    }
  };

  return (
    <div className="containerStyle">
      <div className="contentContainerStyle">
        <form className="contentStyle" onSubmit={handlesSubmit}>
          <fieldset>
            <legend className="table-caption">FORM INPUT DATA</legend>
            <div className="field">
              <label htmlFor="username" className="label">
                Username
              </label>
              <input
                type="text"
                Id="username"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="field">
              <label htmlFor="pelayanan" className="label">
                Pelayanan
              </label>
              <input
                type="text"
                Id="pelayanan"
                className="input"
                value={pelayanan}
                onChange={(e) => setPelayanan(e.target.value)}
                placeholder="Pelayanan"
              />
            </div>
            <div className="field">
              <label htmlFor="keterangan" className="label">
                Keterangan
              </label>
              <select
                Id="keterangan"
                className="input"
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
              >
                <option value="">Pilih status pembayaran...</option>
                <option value={StatusBayar.SUDAH_BAYAR}>{StatusBayar.SUDAH_BAYAR}</option>
                <option value={StatusBayar.BELUM_BAYAR}>{StatusBayar.BELUM_BAYAR}</option>
              </select>
            </div>
            <div>
              <button type="submit" className="buttonStyle">
                Tambahkan Data
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
  
  
};

export default Add;
