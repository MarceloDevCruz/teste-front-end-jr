import React from 'react';
import Visa from '../../assets/footer/Visa.svg';
import Elo from '../../assets/footer/Elo.svg';
import Alelo from '../../assets/footer/alelo.svg';
import Diners from '../../assets/footer/dinners.svg';
import Ifood from '../../assets/footer/ifood.svg';
import MasterCard from '../../assets/footer/mastercard.svg';
import Pix from '../../assets/footer/pix.svg';
import Amex from '../../assets/footer/amex.svg';
import Ticket from '../../assets/footer/ticket.svg';
import Sodexo from '../../assets/footer/sodexo.svg';

const Payment = () => {
  return (
    <div className="payment">
      <h4 className="payment__title">Formas de pagamento</h4>
      <div className="payment__container">
        <img src={Visa} alt="Visa" className="payment__container-items" />
        <img src={Elo} alt="Elo" className="payment__container-items" />
        <img src={Alelo} alt="Alelo" className="payment__container-items" />
        <img src={Diners} alt="Diners" className="payment__container-items" />
        <img src={Ifood} alt="Ifood" className="payment__container-items" />
        <img
          src={MasterCard}
          alt="Master Card"
          className="payment__container-items"
        />
        <img src={Pix} alt="Pix" className="payment__container-items" />
        <img src={Amex} alt="Amex" className="payment__container-items" />
        <img src={Ticket} alt="Ticket" className="payment__container-items" />
        <img src={Sodexo} alt="Sodexo" className="payment__container-items0" />
      </div>
    </div>
  );
};

export default Payment;
