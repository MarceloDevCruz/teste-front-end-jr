import React from 'react';
import Crown from '../../assets/header/CrownSimple.svg';

const MenuList = () => {
  return (
    <ul className="list__header">
      <li className="list__header-li">Todas Categorias</li>
      <li className="list__header-li">Supermercado</li>
      <li className="list__header-li">Livros</li>
      <li className="list__header-li">Moda</li>
      <li className="list__header-li">Lançamentos</li>
      <li className="list__header-li ul-text-color-primary">Ofertas do dia</li>
      <li className="list__header-li">
        <span>
          <img src={Crown} alt="Crown" />
        </span>
        Assinatura
      </li>
    </ul>
  );
};

export default MenuList;
