import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Semua field wajib diisi');
    } else {
      alert('Berhasil masuk');
      setUsername('');
      setPassword('');
      navigate('/PesanLayanan'); // Arahkan ke halaman pesan layanan
    }
  }

  return (
    <div id="login" className="login-page-wrapper">
      <h1 className="primary-subheading">Sign in to your account</h1>
      <div className="login-form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Username
            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
          </label>
          <label>
            Password
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <button className="secondary-button" type="submit">Masuk</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
