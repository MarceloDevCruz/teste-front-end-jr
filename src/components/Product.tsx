import React from 'react';

interface Props {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const Product = ({ productName, descriptionShort, photo, price }: Props) => {
  return (
    <div className="product">
      <img src={photo} alt={productName} />
      <h3 className="product__title">{productName}</h3>
      <h4 className="product__price">R$: {price}</h4>
      <h4 className="product__price-promotion">R$: {price}</h4>
      <h5 className="product__price-parcel">ou 12x de R$: {price} sem juros</h5>
      <p className="product__freight">Frete grátis</p>
      <button className="btn__products">Comprar</button>
    </div>
  );
};

export default Product;
