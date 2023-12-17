import React, { useState } from "react";
import AboutBackground from "../Assets/e.png";
import AboutBackgroundImage from "../Assets/w 1.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import './About.css';
import './Contact.css';
import './Footer.css';

const About = () => {
  return (
    <div id="about" className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Lizen Baby SPA
        </h1>
        <p className="primary-text">
            Selamat datang di Lizen Baby SPA, tempat ajaib yang mempersembahkan sentuhan lembut 
        dan cinta kasih. Setiap detik di Lizen Baby SPA adalah sebuah cerita kasih yang mengalir dari hati. 
          Di sini, setiap sentuhan kami adalah ungkapan kasih dan kepedulian yang mendalam, menciptakan 
        lingkungan yang hangat dan menyenangkan bagi si kecil Anda. Kami percaya bahwa setiap bayi berhak 
          mendapatkan perawatan terbaik, dan itulah yang kami berikan di Lizen Baby SPA.  
        </p>
        <p className="primary-text">
        Memberikan Kesejahteraan, Ketenangan, dan Senyuman Terindah untuk Si Kecil Anda.
          Selamat menikmati pengalaman indah bersama kami. 😊
        </p>
      </div>
    </div>
  );
};

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    alert('Berhasil di submit');
    setEmail('');
  }

  return (
    <div id="contact" className="contact-page-wrapper">
      <h1 className="primary-text">Silahkan hubungi kami</h1>
      <h1 className="primary-text">Kami siap melayani</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="yourmail@gmail.com" value={email} onChange={e => setEmail(e.target.value)} />
        <button className="secondary-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <FaFacebookF />
        </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Twitter</span>
          <span>LinkedIn</span>
          <span>Lokasi</span>
          <span>contact</span>
        </div>
        <div className="footer-section-columns">
          <span>@lizen99</span>
          <span>lizen@spa.com</span>
          <span>kota.kwangya</span>
          <span>9999-8888-9999</span>
        </div>
        <div className="footer-section-columns">
          <span>Bersertifikasi</span>
          <span>Berpengalaman</span>
          <span>Berkualitas</span>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
