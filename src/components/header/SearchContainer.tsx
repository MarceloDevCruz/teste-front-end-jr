import React from 'react';
import Logo from '../../assets/header/VtexLogo.svg';
import SearchGlass from '../../assets/header/MagnifyingGlass.svg';
import Box from '../../assets/header/Box.svg';
import Heart from '../../assets/header/Heart.svg';
import UserCircle from '../../assets/header/UserCircle.svg';
import Cart from '../../assets/header/ShoppingCart.svg';

const SearchContainer = () => {
  return (
    <div>
      <div className="search">
        <img src={Logo} alt="Vtex Logo" className="search__logo" />
        <form action="#" className="search__form">
          <div className="search__form-container">
            <input
              type="text"
              className="search__form-container-input"
              placeholder="O que você está buscando?"
            />
            <img
              src={SearchGlass}
              alt="SearchButton"
              className="search__form-container-button"
            />
          </div>
        </form>
        <ul className="search__list">
          <li>
            <img src={Box} alt="Box" className="search__list-icons" />
          </li>
          <li>
            <img src={Heart} alt="Heart" className="search__list-icons" />
          </li>
          <li>
            <img src={UserCircle} alt="User" className="search__list-icons" />
          </li>
          <li>
            <img src={Cart} alt="Cart" className="search__list-icons" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchContainer;
