import React from 'react';
import Vtex from '../../assets/footer/VtexLogo.svg';
import Econverse from '../../assets/footer/EconverseLogo.svg';

const Copyright = () => {
  return (
    <div className="copyright">
      <div className="copyright__container">
        <p className="copyright__container-text">
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>
      </div>
      <div className="copyright__logo">
        <img src={Econverse} alt="Econverse" className="copyright__logo-img" />
        <img src={Vtex} alt="Vtex" className="copyright__logo-img" />
      </div>
    </div>
  );
};

export default Copyright;
