import React from 'react';

const ProductsList = () => {
  return (
    <ul className="productsList">
      <li className="productsList__item ul-text-color-primary ul-font-weight-700">
        Celular
      </li>
      <li className="productsList__item">Acessórios</li>
      <li className="productsList__item">Tablets</li>
      <li className="productsList__item">Notebooks</li>
      <li className="productsList__item">Tvs</li>
      <li className="productsList__item">Ver Todos</li>
    </ul>
  );
};

export default ProductsList;
