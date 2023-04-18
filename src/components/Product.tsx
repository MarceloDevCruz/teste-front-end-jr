import React, { useState } from 'react';

interface Props {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const Product = ({ productName, descriptionShort, photo, price }: Props) => {
  const [clicked, setClicked] = useState(false);

  const pricePromotion = price * 0.9;
  const priceParcel = price / 12;

  const priceConvert = price.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const pricePromotionConvert = pricePromotion.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const priceParcelConvert = priceParcel.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <>
      <div className="product">
        <img src={photo} alt={productName} />
        <h3 className="product__title">{productName}</h3>
        <h4 className="product__price">{priceConvert}</h4>
        <h4 className="product__price-promotion">{pricePromotionConvert}</h4>
        <h5 className="product__price-parcel">
          ou 12x de {priceParcelConvert} sem juros;
        </h5>
        <p className="product__freight">Frete grátis</p>
        <button className="btn__products" onClick={() => setClicked(!clicked)}>
          Comprar
        </button>
      </div>
      {clicked && (
        <div className="home__opacity">
          <div className="home__popup">
            <img src={photo} alt={productName} className="home__popup-img" />
            <div className="home__popup-content">
              <h3 className="home__popup-content-title">{productName}</h3>
              <h4 className="home__popup-content-promotion">
                {pricePromotionConvert}
              </h4>
              <h4 className="home__popup-content-description">
                {descriptionShort}
              </h4>
              <a href="#" className="home__popup-content-details">
                Veja mais detalhes do produto &#8594;
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
