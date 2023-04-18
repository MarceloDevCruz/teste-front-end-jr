import React from 'react';
import Marketing from './Marketing';
import SearchContainer from './SearchContainer';
import MenuList from './MenuList';
import Promotion from './Promotion';

const Header = () => {
  return (
    <header className="header">
      <Marketing />
      <SearchContainer />
      <MenuList />
      <Promotion />
    </header>
  );
};

export default Header;
