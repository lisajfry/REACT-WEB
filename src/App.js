import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Layanan from "./Components/Layanan";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PesanLayanan from "./Components/PesanLayanan";
import FormReservasi from "./Components/FormReservasi";
import AddUser from "./Components/pelayanan/AddUser";
import EditUser from "./Components/pelayanan/EditUser";
import User from "./Components/pelayanan/User";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/layanan" element={ <Layanan /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register />} />
        <Route path="/pesanlayanan" element={<PesanLayanan/>} />
        <Route path="/formreservasi" element={<FormReservasi/>} />
        <Route path="/pelayanan/user/AddUser" element={<AddUser/>} />
        <Route path="/pelayanan/user/EditUser/:Id" element={<EditUser/>} />
        <Route path="/pelayanan/user" element={<User/>} />
      </Routes>
    </Router>
  );
};

export default App;
