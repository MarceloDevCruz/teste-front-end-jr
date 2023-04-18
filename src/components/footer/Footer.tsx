import React from 'react';
import About from './About';
import Information from './Information';
import Payment from './Payment';
import TextAreaPromotion from './TextAreaPromotion';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <About />
          <Information />
          <Payment />
          <TextAreaPromotion />
        </div>
      </footer>
      <Copyright />
    </>
  );
};

export default Footer;
