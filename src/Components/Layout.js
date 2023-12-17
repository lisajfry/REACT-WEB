import React, { useState, useEffect } from "react";
import Logoloading from '../Assets/Logoloading.gif';
import './Layanan.css';

const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={Logoloading} alt="Loading..." />
            
            <p style={{ marginTop: '20px' }}> Tunggu ya, Seng</p>
        </div>
    );
};

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Ubah waktu loading sesuai kebutuhan

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return <>{children}</>;
};

export default Layout;
