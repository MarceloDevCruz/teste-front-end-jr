import React from 'react';

const TextAreaPromotion = () => {
  return (
    <div className="footerPromotion">
      <h4 className="footerPromotion__subtitle">Cadastre-se e receba nossas</h4>
      <h3 className="footerPromotion__title">novidades e promoções</h3>
      <p className="footerPromotion__text">
        Excepteur sint accaecat cudatat nonent, sunt in culpa qui officia lorem
        ippsum
      </p>
      <form action="#" className="footerPromotion__form">
        <input
          type="text"
          className="footerPromotion__form-input"
          placeholder="Seu e-mail"
        />
        <button className="btn__footer">Ok</button>
      </form>
    </div>
  );
};

export default TextAreaPromotion;
