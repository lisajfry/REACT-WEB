import React, { useState } from "react";
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !phone || !password) {
      alert('Semua field wajib diisi');
    } else {
      alert('Berhasil di daftar');
      setUsername('');
      setPhone('');
      setPassword('');
    }
  }

  return (
    <div id="register" className="register-page-wrapper">
      <h1 className="primary-subheading">Create your account</h1>
      <div className="register-form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
          </label>
          <label>
            No.telp
            <input type="text" placeholder="no.telp" value={phone} onChange={e => setPhone(e.target.value)} />
          </label>
          <label>
            Password
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <button className="secondary-button" type="submit">Daftar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
