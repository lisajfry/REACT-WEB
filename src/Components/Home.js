import React from "react";
import BannerImage from "../Assets/balon.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Layout from './Layout';
import './Home.css';

const Home = () => {
    return (
        <Layout>
            <div className="home">
                <div className="content">
                    <div className="text-content">
                        <h1>Selamat datang di situs kami!</h1>
                        <p>Kami senang Anda berada di sini. Jelajahi lebih lanjut untuk mengetahui lebih banyak tentang layanan kami.</p>
                        <Link to="/layanan" className="explore-button"> {/* Ubah ini */}
                            Jelajahi <FiArrowRight />
                        </Link>   

                        <a href="/pelayanan/user"><button type="button">Pelayanan</button></a>
                    </div>
                    <img src={BannerImage} alt="Banner" className="banner-image" />
                </div>
            </div>
        </Layout>
    );
};

export default Home;
