import React from 'react';
import VtexLogo from '../assets/main/VtexLogo.svg';

const Brands = () => {
  return (
    <section className="brands">
      <h3 className="brands__title">Navegue por marcas</h3>
      <div className="brands__container">
        <div className="brands__box">
          <img src={VtexLogo} alt="Vtex Logo" className="brands__box-img" />
        </div>
        <div className="brands__box">
          <img src={VtexLogo} alt="Vtex Logo" className="brands__box-img" />
        </div>
        <div className="brands__box">
          <img src={VtexLogo} alt="Vtex Logo" className="brands__box-img" />
        </div>
        <div className="brands__box">
          <img src={VtexLogo} alt="Vtex Logo" className="brands__box-img" />
        </div>
        <div className="brands__box">
          <img src={VtexLogo} alt="Vtex Logo" className="brands__box-img" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
