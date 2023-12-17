import React from "react";
import Hydrotherapy from "../Assets/Hydrotherapy.jpg";
import BabyMassage from "../Assets/Baby Massage.jpg";
import Refleksiologi from "../Assets/Refleksiologi.jpg";
import BabyYoga from "../Assets/BabyYoga.jpg";
import MusicTherapy from "../Assets/MusicTherapy.jpg";
import SensoryPlay from "../Assets/SensoryPlay.jpg";
import './Layanan.css';

const Layanan = () => {
  const LayananInfoData = [
    {
      image: Refleksiologi,
      title: "Refreksiologi",
      text: "teknik yang merangsang titik-titik tertentu pada kaki yang terhubung dengan organ-organ dalam tubuh",
    },

    {
      image: Hydrotherapy,
      title: "Hydrotherapy",
      text: "melibatkan penggunaan air hangat dan lembut untuk merangsang gerakan bayi di dalam air",
    },
    
    {
      image: BabyMassage,
      title: "Baby Massage",
      text: "pijatan khusus untuk membantu meredakan ketegangan otot, meningkatkan sirkulasi darah, dan memperkuat ikatan emosional antara bayi dan orang tua.",
    },

    {
      image: BabyYoga,
      title: "Baby Yoga",
      text: "program ini bisa membantu bayi mengembangkan fleksibilitas dan koordinasi tubuh mereka. Selain itu, yoga juga bisa membantu bayi merasa lebih rileks dan tidur lebih nyenyak",
    },

    {
      image: MusicTherapy,
      title: "Music Therapy",
      text: " terapi musik bisa membantu merangsang perkembangan otak bayi dan memperkuat ikatan emosional antara bayi dan orang tua",
    },

    {
      image: SensoryPlay,
      title: "Sensory Play",
      text: "aktivitas ini melibatkan penggunaan mainan dan bahan yang merangsang indera bayi, seperti tekstur, suara, dan warna",
    },
    
  ];
  return (
    <div className="Layanan-section-wrapper">
      <div className="layanan-section-top">
        <h1 className="primary-heading">Layanan Lizen Baby SPA</h1>
        <p className="primary-text">
          Berikut beberapa pelayanan yang ditawarkan Lizen Baby Spa:
        </p>
      </div>
      <div className="Layanan-section-bottom">
        {LayananInfoData.map((data) => (
          <div className="Layanan-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layanan;
