import React from 'react';
import CreditCard from '../../assets/header/CreditCard.svg';
import Truck from '../../assets/header/Truck.svg';
import Sheck from '../../assets/header/ShieldCheck.svg';

const Marketing = () => {
  return (
    <div className="marketing">
      <div className="marketing__container">
        <img
          src={Sheck}
          className="marketing__container-vector"
          alt="ShieldCheck"
        />
        <span className="marketing__container-text">Compra</span>
        <strong className="marketing__container-text-colored">
          &nbsp;100% segura
        </strong>
      </div>

      <div className="marketing__container">
        <img
          src={Truck}
          className="marketing__container-vector"
          alt="ShieldCheck"
        />
        <strong className="marketing__container-text-colored">
          Frete grátis
        </strong>
        <span className="marketing__container-text">&nbsp;acima de R$ 200</span>
      </div>

      <div className="marketing__container">
        <img
          src={CreditCard}
          className="marketing__container-vector"
          alt="ShieldCheck"
        />
        <strong className="marketing__container-text-colored">Parcele</strong>
        <span className="marketing__container-text"> &nbsp;suas compras</span>
      </div>
    </div>
  );
};

export default Marketing;
