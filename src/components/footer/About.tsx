import React from 'react';
import Facebook from '../../assets/footer/Facebook.svg';
import Youtube from '../../assets/footer/Youtube.svg';
import Instagram from '../../assets/footer/Instagram.svg';

const About = () => {
  return (
    <div className="about">
      <h4 className="about__title">Sobre nós</h4>
      <ul className="about__list">
        <li className="about__list-item">Conheça</li>
        <li className="about__list-item">Como Comprar</li>
        <li className="about__list-item">Indicação e Desconto</li>
      </ul>
      <div className="about__vector">
        <img src={Facebook} alt="Facebook" className="about__vector-item" />
        <img src={Instagram} alt="Instagram" className="about__vector-item" />
        <img src={Youtube} alt="Youtube" className="about__vector-item" />
      </div>
    </div>
  );
};

export default About;
