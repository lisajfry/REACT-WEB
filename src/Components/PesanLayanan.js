import React from "react";
import Hydrotherapy from "../Assets/Hydrotherapy.jpg";
import BabyMassage from "../Assets/Baby Massage.jpg";
import Refleksiologi from "../Assets/Refleksiologi.jpg";
import BabyYoga from "../Assets/BabyYoga.jpg";
import MusicTherapy from "../Assets/MusicTherapy.jpg";
import SensoryPlay from "../Assets/SensoryPlay.jpg";
import { Link } from 'react-router-dom';
import './PesanLayanan.css';

const PesanLayanan = () => {
  const PesanLayananInfoData = [
    {
      image: Refleksiologi,
      title: "Refreksiologi",
      price: "80.000",
    },

    {
      image: Hydrotherapy,
      title: "Hydrotherapy",
      price: "95.000",
    },
    
    {
      image: BabyMassage,
      title: "Baby Massage",
      price: "90.000",
    },

    {
      image: BabyYoga,
      title: "Baby Yoga",
      price: "85.000",
    },

    {
      image: MusicTherapy,
      title: "Music Therapy",
      price: "70.000",
    },

    {
      image: SensoryPlay,
      title: "Sensory Play",
      price: "75.000",
    },
    
  ];
  return (
    <div className="Pelayanan-section-wrapper">
      {/* ... */}
      <div className="Pelayanan-section-bottom">
        {PesanLayananInfoData.map((data) => (
          <div className="Pelayanan-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <Link to="/FormReservasi">
              <h2>{data.title}</h2>
            </Link>
            <p>{data.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PesanLayanan;
