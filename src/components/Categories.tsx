import React from 'react';
import Tecnology from '../assets/main/monitorar-tablet-e-smartohone 1.svg';
import Marketplace from '../assets/main/supermercados 1.svg';
import Fashion from '../assets/main/moda 1.svg';
import Drinks from '../assets/main/whiskey.svg';
import Tools from '../assets/main/ferramentas 1.svg';
import Health from '../assets/main/cuidados-de-saude 1.svg';
import Sports from '../assets/main/corrida 1.svg';

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__container">
        <div className="categories__container-box ul-background-color-white ul-box-shadow">
          <img src={Tecnology} alt="Tecnologia" />
        </div>
        <h5 className="categories__container-text ul-text-color-primary">
          Tecnologia
        </h5>
      </div>

      <div className="categories__container">
        <div className="categories__container-box">
          <img src={Marketplace} alt="SuperMercado" />
        </div>
        <h5 className="categories__container-text">Supermercado</h5>
      </div>

      <div className="categories__container">
        <div className="categories__container-box">
          <img src={Drinks} alt="Bebidas" />
        </div>
        <h5 className="categories__container-text">Bebidas</h5>
      </div>

      <div className="categories__container">
        <div className="categories__container-box">
          <img src={Tools} alt="Ferramentas" />
        </div>
        <h5 className="categories__container-text">Ferramentas</h5>
      </div>

      <div className="categories__container">
        <div className="categories__container-box">
          <img src={Health} alt="Saúde" />
        </div>
        <h5 className="categories__container-text">Saúde</h5>
      </div>

      <div className="categories__container">
        <div className="categories__container-box">
          <img src={Sports} alt="Esportes e Fitness" />
        </div>
        <h5 className="categories__container-text">Esportes e Fitness</h5>
      </div>

      <div className="categories__container">
        <div className="categories__container-box">
          <img src={Fashion} alt="Moda" />
        </div>
        <h5 className="categories__container-text">Moda</h5>
      </div>
    </div>
  );
};

export default Categories;
